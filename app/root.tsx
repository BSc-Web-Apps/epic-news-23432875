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
				<div className="flex-1">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">Welcome to Anima Lazer!</h1>
						<p className='text - base text-red-500'>
							our goal is to make everyone happy!
						</p>
						<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"> 
							Welcome
						</button>
						<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"> 
							Welcome
						</button>
						<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"> 
							Welcome
						</button>

					</main>
				</div>
			</div>
		</Document>
	)
}
