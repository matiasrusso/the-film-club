import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {CardList, Message} from '../components';

export const Favourites = () => {

	const {data, favourites} = useSelector(store => store.movie)

	const favouritesList = useMemo(() => {
		return data.filter((item) => {
			return item.isFavourite === true
		})
	}, [data, favourites])

	return (
		<div className="fadeIn">
			<h1 className="page-title">Favoritos</h1>

			<ul>
				{
					(favouritesList.length > 0)
						? <CardList data={favouritesList} />
						: <Message title="No hay películas ni series guardadas" />
				}
			</ul>
		</div>
	)
}