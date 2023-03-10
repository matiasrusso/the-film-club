import {useDispatch} from 'react-redux';
import {setFavourite, startLoadingMovie, startLoadingMovies, startSearching} from '../store';

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

	const handleActiveFilm = (media_type, id) => {
		dispatch(startLoadingMovie(media_type, id))
	}

	const handleSearch = (query, page = 1) => {
		dispatch(startSearching(query, page))
	}

	const handleLoadMovies = (page = 1) => {
		dispatch(startLoadingMovies(page))
	}

	return {
		handleFavourites,
		handleActiveFilm,
		handleSearch,
		handleLoadMovies
	}
}