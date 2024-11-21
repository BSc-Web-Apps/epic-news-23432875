import { type LinksFunction } from '@remix-run/node'
import Document from '~/components/shared-layout/Document'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'
import FooterMenuRight from './components/organisms/Footer/FooterMenuRight'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'

export const links: LinksFunction = () => {
	return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
	const nonce = useNonce()

	return (
		<Document nonce={nonce}>
			<div className="flex h-screen flex-col justify-between">
				<HeaderWithSearch />

				<div className="flex-1 bg-yellow-300">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega text-black">Welcome to Epic News!</h1>

						<div className="container mx-auto grid grid-cols-4 gap-14">
							<div className="flex h-60 w-80 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									Main Article
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
							<div className="flex h-60 w-80 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									Main Article
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
							<div className="flex h-60 w-80 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									Main Article
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
						</div>

						<div className="container mx-auto grid grid-cols-4 gap-8">
							<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									News Article 1
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
							<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									News Article 2
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
							<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									News Article 3
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
							<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									News Article 4
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
						</div>

						<div className="container mx-auto grid grid-cols-4 gap-8">
							<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									News Article 5
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
							<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									News Article 6
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
							<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									News Article 7
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
							<div className="flex h-48 w-48 flex-col justify-between bg-amber-100 p-4">
								<h3 className="text-3xl font-bold text-gray-800">
									News Article 8
								</h3>
								<p className="text-xs text-gray-400">Category</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Full Article
								</button>
							</div>
						</div>
					</main>
					<FooterMenuRight />
				</div>
			</div>
		</Document>
	)
}
