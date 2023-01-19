export const Message = ({title, text}) => {
	return (
		<div className="message">
			<h2>{title}</h2>

			<p>{text}</p>
		</div>
	)
}