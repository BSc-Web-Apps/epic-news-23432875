import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { toTitleCase } from '~/utils/stringUtils.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	console.log({ category })
	const categoryTitle = toTitleCase(category)

	return json({})
	return json({ categoryTitle })
}

export default function NewsCategoryPage() {
	const { categoryTitle } = useLoaderData<typeof loader>()
	return (
		<div className="container py-16">
			<h2 className="text-h2">Generic news category page</h2>
			<h2 className="text-h2">{categoryTitle}</h2>
		</div>
	)
}
