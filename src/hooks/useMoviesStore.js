import {useDispatch} from 'react-redux';
import {setFavourite, startLoadingMovie, startSearching} from '../store';

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

	const handleActiveFilm = (type, id) => {
		dispatch(startLoadingMovie(type, id))
	}

	const handleSearch = (query) => {
		dispatch(startSearching(query))
	}

	return {
		handleFavourites,
		handleActiveFilm,
		handleSearch
	}
}