import { Link } from '@remix-run/react'
import logo from '~/assets/png/logo-assignment.png'

import LoginOrUserDropdown from './LoginOrUserDropdown'

interface HeaderWithSearchProps {
	isAdminUser: boolean
}

export default function HeaderWithSearch({
	isAdminUser,
}: HeaderWithSearchProps) {
	return (
		<header className="bg-yellow-950 py-6">
			<nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
				<Link to="/" className="flex w-20 items-center justify-center lg:w-24">
					<img src={logo} alt="logo assignment" className="w-30" />
				</Link>
				<div className="flex flex-1 items-center justify-center gap-8">
					<Link
						to="/news"
						className="hover:text-brown-100 text-sm font-semibold text-white transition"
					>
						News
					</Link>
					<Link
						to="/about-us"
						className="text-sm font-semibold text-white transition hover:text-yellow-100"
					>
						About us
					</Link>
					<Link
						to="/contact-us"
						className="text-sm font-semibold text-white transition hover:text-yellow-100"
					>
						Contact Us
					</Link>
					{isAdminUser && (
						<Link
							to="/admin-review"
							className="rounded-lg bg-green-900 px-4 py-2 text-sm font-semibold text-yellow-100 transition hover:bg-green-800"
						>
							Admin Review
						</Link>
					)}
				</div>
				<div className="flex items-center gap-10">
					<LoginOrUserDropdown />
				</div>
			</nav>
		</header>
	)
}
