import { Link, NavLink } from '@remix-run/react'
import logo from '#app/assets/svg/icon-placeholder.svg'
import SocialMediaButtons from '#app/components/molecules/SocialMediaButtons'
import { type FooterProps } from './FooterBasic'

const FooterLogoCentre = ({
	companyName = 'CHANGE THIS TO YOUR COMPANY NAME!',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className="bg-secondary lg:py-16 dark:bg-dark-secondary">
			<div className="container">
				<div className="flex flex-col items-center justify-around border-b border-muted-foreground/75 lg:flex-row lg:pb-8 dark:border-dark-muted-foreground/75">
					<div
						className="flex flex-col items-start gap-6 py-8
					font-bold text-secondary-foreground lg:flex-row dark:text-dark-secondary-foreground"
					>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
					</div>

					<Link to="/" className="flex w-20 items-center justify-center">
						<img src={logo} alt={altText} />
					</Link>

					<div
						className="flex flex-col items-start gap-6 py-8
					font-bold text-secondary-foreground lg:flex-row dark:text-dark-secondary-foreground"
					>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center py-8">
					<div className="block">
						<div className="mb-8 flex justify-center">
							<SocialMediaButtons />
						</div>
						<div className="text-center text-secondary-foreground/75 dark:text-dark-secondary-foreground/75">
							{companyName} | {new Date().getFullYear()}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterLogoCentre