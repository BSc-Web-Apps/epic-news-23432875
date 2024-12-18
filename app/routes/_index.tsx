import { type MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/react'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import { prisma } from '#app/utils/db.server.ts'
import heroImage from '~/assets/jpg/ai-news.jpg'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]
export async function loader() {
	const allArticles = await prisma.article.findMany({
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
	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-mega text-black">Welcome to Epic News!</h1>

			<div className="w-full py-16">
				<HeroCallToAction image={heroImage}>
					<div className="flex flex-col gap-8 px-8">
						<h2 className="text-h2 text-black">Welcome to Epic News</h2>
						<p className="text-lg text-black">
							Keep up to date with the latest tech news.
						</p>
					</div>
				</HeroCallToAction>
			</div>

			<h1 className="k text-3xl font-bold text-gray-800"> Latest News</h1>
			<div className="container mx-auto flex justify-center gap-4">
				<div className="flex h-60 w-80 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">Main Article</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
				<div className="flex h-60 w-80 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">Main Article</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
				<div className="flex h-60 w-80 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">Main Article</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
			</div>

			<h1 className="text-3xl font-bold text-gray-800">All News:</h1>
			<div className="container mx-auto grid grid-cols-4 gap-8">
				<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">News Article 1</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
				<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">News Article 2</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
				<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">News Article 3</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
				<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">News Article 4</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
			</div>

			<div className="container mx-auto grid grid-cols-4 gap-8">
				<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">News Article 5</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
				<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">News Article 6</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
				<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">News Article 7</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
				<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
					<h3 className="text-3xl font-bold text-gray-800">News Article 8</h3>
					<p className="text-xs text-gray-400">Category</p>
					<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
						Full Article
					</button>
				</div>
			</div>

			<div className="container py-16">
				<h2 className="mb-8 text-h2 font-normal">Latest news</h2>

				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					{allArticles.length > 0 ? (
						allArticles.map(article => (
							<ArticleCard
								key={article.id}
								title={article.title}
								category={article.category?.name}
								imageId={article.images[0]?.id}
							/>
						))
					) : (
						<p>No articles found</p>
					)}
				</div>
			</div>
		</main>
	)
}
