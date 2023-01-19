import {useMemo} from 'react';
import {useSelector} from 'react-redux';

export const Favourites = () => {

	const {data, favourites} = useSelector(store => store.movie)

	const favouritesList = useMemo(() => {
		console.log('hola')
		return data.filter((item) => {
			return item.isFavourite === true
		})
	}, [data, favourites])

	return (
		<div>
			<h1>Favoritos</h1>

			<ul>
				{
					favouritesList.map(item => <li key={item.id}>{item.title}</li>)
				}
			</ul>
		</div>
	)
}