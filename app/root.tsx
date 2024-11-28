import { type LinksFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
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

				<div className="flex-1 bg-yellow-100">
					<Outlet />
					<FooterMenuRight />
				</div>
			</div>
		</Document>
	)
}
