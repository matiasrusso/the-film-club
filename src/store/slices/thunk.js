import {movieDatabaseApi} from '../../api/api';
import {setLoading, setData, setActiveFilm, setSearchData} from '../../store';
import {dataResolver, objectConverter} from '../../helpers';

export const startLoadingMovies = () => {
	return async(dispatch, getState) => {

		dispatch(setLoading())

		try {
			const tvResults = await movieDatabaseApi.get(`/tv/popular`)
			const movieResults = await movieDatabaseApi.get(`/movie/popular`)

			const resolvedTv = dataResolver(tvResults.data.results, 'tv', getState().movie)
			const resolvedMovie = dataResolver(movieResults.data.results, 'movie', getState().movie)

			const data = resolvedTv.concat(resolvedMovie)

			dispatch(setData(data))
		} catch(error) {
			dispatch(setData(null))
		}
	}
}

export const startLoadingMovie = (media_type, id) => {
	return async(dispatch, getState) => {

		dispatch(setLoading())

		try {
			const {data} = await movieDatabaseApi.get(`/${media_type}/${id}`)

			const film = objectConverter(data, media_type, getState().movie)

			dispatch(setActiveFilm(film))

		} catch(error) {
			dispatch(setActiveFilm(null))
		}
	}
}

export const startSearching = (query) => {
	return async(dispatch, getState) => {

		dispatch(setLoading())

		try {
			const {data:{results}} = await movieDatabaseApi.get(`/search/multi/`, {
				params: {
					query: query
				}
			})

			const data = dataResolver(results, null, getState().movie)

			dispatch(setSearchData(data))
		} catch (error) {
			dispatch(setSearchData(null))
		}
	}
}