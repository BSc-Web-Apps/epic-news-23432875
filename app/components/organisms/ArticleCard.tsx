import {
	MdOutlineBusinessCenter,
	MdOutlineTheaters,
	MdOutlineDesktopMac,
	MdOutlineNewspaper,
} from 'react-icons/md'

interface ArticleCardProps {
	title: string
	category?: string
}

export default function ArticleCard({
	title,
	category = 'General news',
}: ArticleCardProps) {
	const categoryIcons: { [key: string]: JSX.Element } = {
		Business: <MdOutlineBusinessCenter size={20} className="text-red-300" />,
		Entertainment: <MdOutlineTheaters size={20} className="text-red-300" />,
		Technology: <MdOutlineDesktopMac size={20} className="text-red-300" />,
		'General news': <MdOutlineNewspaper size={20} className="text-red-300" />,
	}

	return (
		<div className="flex h-64 cursor-pointer flex-col justify-between rounded bg-red-900 p-4 transition-all duration-500 hover:scale-110">
			<h3 className="line-clamp-3 text-xl font-bold text-white">{title}</h3>

			<div className="flex items-center gap-2">
				{categoryIcons[category]}
				<p className="text-sm text-red-300">{category}</p>
			</div>
		</div>
	)
}
