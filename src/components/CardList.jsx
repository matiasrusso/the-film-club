import {Card} from '../components';

export const CardList = ({data}) => {
	return (
		<ul className="card-list">
			{
				data.map((item) => (
					<li key={item.id}>
						<Card
							{...item}
						/>
					</li>
				))
			}
		</ul>
	)
}