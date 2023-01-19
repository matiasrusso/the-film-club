import {movieDatabaseApi} from '../../api/api';
import {setLoading, setData, setActiveFilm, setSearchdata} from '../../store';
import {dataResolver, objectConverter} from '../../helpers';

export const startLoadingMovies = () => {
	return async(dispatch, getState) => {

		dispatch(setLoading())

		try {
			const tv = await movieDatabaseApi.get(`/tv/popular`)
			const movie = await movieDatabaseApi.get(`/movie/popular`)

			const resolvedTv = dataResolver(tv, 'tv', getState().movie)
			const resolvedMovie = dataResolver(movie, 'movie', getState().movie)

			const data = resolvedTv.concat(resolvedMovie)

			dispatch(setData(data))
		} catch(error) {

			console.log(error)
			dispatch(setData(null))
		}
	}
}

export const startLoadingMovie = (type, id) => {
	return async(dispatch, getState) => {

		dispatch(setLoading())

		try {
			const {data} = await movieDatabaseApi.get(`/${type}/${id}`)

			const film = objectConverter(data, type, getState().movie)

			dispatch(setActiveFilm(film))

		} catch(error) {
			console.log(error)
		}
	}
}

export const startSearching = (query) => {
	return async(dispatch) => {

		dispatch(setLoading())

		try {
			const {data:{results}} = await movieDatabaseApi.get(`/search/multi/`, {
				params: {
					query: query
				}
			})

			console.log(results)

			dispatch(setSearchdata(results))
		} catch (e) {
			console.log(e)
		}
	}
}