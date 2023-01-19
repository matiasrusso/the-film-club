import {setFavourite} from '../../src/store/slices/movieSlice.js';
import {useDispatch} from 'react-redux';

export const useMoviesStore = () => {

	const dispatch = useDispatch();

	const handleFavourites = (id) => {
		const favouritesMovies = JSON.parse(localStorage.getItem('favouritesMovies')) || []

		if (favouritesMovies.includes(id)) {
			const i = favouritesMovies.indexOf(id)
			favouritesMovies.splice(i, 1)
		} else {
			favouritesMovies.push(id)
		}

		localStorage.setItem('favouritesMovies', JSON.stringify(favouritesMovies))

		dispatch(setFavourite(id))
	}

	return {
		handleFavourites
	}
}