import { type MetaFunction } from '@remix-run/node'
import { json, Link, useLoaderData } from '@remix-run/react'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import { prisma } from '#app/utils/db.server.ts'
import heroImage from '~/assets/jpg/ai-news.jpg'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]
export async function loader() {
	const allArticles = await prisma.article.findMany({
		where: { isPublished: true },
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ allArticles })
}

export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()
	return (
		<main className="grid h-full">
			<div className="w-full py-16">
				<HeroCallToAction image={heroImage}>
					<div className="flex flex-col gap-8 px-8">
						<h2 className="text-h2 text-yellow-950">Welcome to Epic News</h2>
						<p className="text-lg text-yellow-950">
							Keep up to date with the latest tech news.
						</p>
					</div>
				</HeroCallToAction>
			</div>

			<div className="container">
				<h2 className="mb-8 text-h2 font-normal">Latest news</h2>

				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					{allArticles.length > 0 ? (
						allArticles.map(article => (
							<Link key={article.id} to={`/article/${article.id}`}>
								<ArticleCard
									title={article.title}
									category={article.category?.name}
									// imageId={article.images[0]?.id}
								/>
							</Link>
						))
					) : (
						<p>No articles found</p>
					)}
				</div>
			</div>
		</main>
	)
}
