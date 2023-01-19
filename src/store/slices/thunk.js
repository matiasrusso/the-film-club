import {setLoading, setData} from './movieSlice';
import {movieDatabaseApi} from '../../api/api';
import {resolveData} from '../../helpers/resolveData';

export const startLoadingMovies = () => {
	return async(dispatch, getState) => {

		dispatch(setLoading())

		try {
			const tv = await movieDatabaseApi.get(`/tv/popular`)
			const movie = await movieDatabaseApi.get(`/movie/popular`)

			const resolvedTv = resolveData(tv, 'tv', getState().movie)
			const resolvedMovie = resolveData(movie, 'movie', getState().movie)

			const data = resolvedTv.concat(resolvedMovie)

			dispatch(setData(data))
		} catch(error) {

			console.log(error)
			dispatch(setData(null))
		}
	}
}