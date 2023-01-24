import {movieDatabaseApi} from '../../api/api';
import {setLoading, setData, setActiveFilm, setSearchData} from '../../store';
import {dataResolver, objectConverter} from '../../helpers';

export const startLoadingMovies = (page) => {
	return async(dispatch, getState) => {

		dispatch(setLoading())

		try {
			const tvResults = await movieDatabaseApi.get(`/tv/popular`, {
				params: {
					page: page
				}
			})
			const movieResults = await movieDatabaseApi.get(`/movie/popular`, {
				params: {
					page: page
				}
			})

			const resolvedTv = dataResolver(tvResults.data.results, 'tv', getState().movie, page)
			const resolvedMovie = dataResolver(movieResults.data.results, 'movie', getState().movie, page)

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

export const startSearching = (query, page) => {
	return async(dispatch, getState) => {

		dispatch(setLoading())

		try {
			const {data:{results}} = await movieDatabaseApi.get(`/search/multi/`, {
				params: {
					query: query,
					page: page
				}
			})

			const data = dataResolver(results, null, getState().movie)

			dispatch(setSearchData(data))
		} catch (error) {
			dispatch(setSearchData(null))
		}
	}
}