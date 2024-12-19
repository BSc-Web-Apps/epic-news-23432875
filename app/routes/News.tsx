import { NavLink, Outlet } from '@remix-run/react'

export default function NewsPage() {
	return (
		<main className="flex flex-col py-24">
			<div className="container py-16">
				<h1 className="text-3xl font-bold text-gray-800">News</h1>
				<h2 className="text-4xl">
					Select a news category from the choices above...
				</h2>

				<div className="flex space-x-4 py-4">
					<NavLink
						to="technology"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
						}
					>
						Technology
					</NavLink>

					<NavLink
						to="entertainment"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
						}
					>
						Entertainment
					</NavLink>

					<NavLink
						to="business"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
						}
					>
						Business
					</NavLink>
				</div>
			</div>

			<Outlet />
		</main>
	)
}
