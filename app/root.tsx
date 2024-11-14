import { type LinksFunction } from '@remix-run/node'
import Document from '~/components/shared-layout/Document'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'

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
				<div className="flex-1 bg-yellow-300">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega text-black">Welcome to Anima Lazer!</h1>
						<p className="text - base h-8 text-red-500">
							our goal is to make everyone happy!
						</p>
						<div className="flex gap-12">
							<div>
								<p className="text-black"> first news</p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Welcome
								</button>
							</div>
							<div>
								<p className="text-black"> second news </p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Welcome
								</button>
							</div>
							<div>
								<p className="text-black"> third news </p>
								<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
									Welcome
								</button>
							</div>
						</div>
					</main>
				</div>
			</div>
		</Document>
	)
}
