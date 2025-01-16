import { invariant } from '@epic-web/invariant'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params
	invariant(typeof category === 'string', 'Category not found')

	const filteredArticles = await prisma.article.findMany({
		where: {
			category: {
				slug: category, // Retrieves only articles in the specified category
			},
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ category, filteredArticles })
}

export default function NewsCategoryPage() {
	const { category, filteredArticles } = useLoaderData<typeof loader>()
	return (
		<div className="container py-16">
			<h2 className="mb-4 text-h2">{category}</h2>
			<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
				{filteredArticles.map(article => (
					<ArticleCard
						key={article.id}
						title={article.title}
						articleid={article.id}
					/>
				))}
			</div>
		</div>
	)
}
