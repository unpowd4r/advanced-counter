type TitleButtonType = {
	title: string
	onClick: () => void
	activeButton?: boolean
}
export const Button = ({ title, onClick, activeButton }: TitleButtonType) => {
	return (
		<button
			disabled={activeButton}
			className={activeButton ? 'disabled' : 'button'}
			onClick={onClick}
		>
			{title}
		</button>
	)
}
