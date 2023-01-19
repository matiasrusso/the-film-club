import {useMoviesStore} from '../hooks';

export const FavButton = ({id, isFavourite}) => {

	const {handleFavourites} = useMoviesStore()

	const onFavouriteChange = (id) => {
		handleFavourites(id)
	}

	return (
		<button
			onClick={() => onFavouriteChange(id)}
			className="button favourite-button"
		>
			{
				(isFavourite)
					? <i className="fa-solid fa-heart"></i>
					: <i className="fa-regular fa-heart"></i>
			}
		</button>
	)
}