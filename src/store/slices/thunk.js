import {setLoading, setData} from './movieSlice';
import {movieDatabaseApi} from '../../api/api';
import {resolveData} from '../../helpers/resolveData';

export const startLoadingMovies = (param) => {
	return async(dispatch, getStore) => {

		dispatch(setLoading())

		try {
			const tv = await movieDatabaseApi.get(`/tv/popular`)
			const resolvedTv = await resolveData(tv, 'tv')

			const movie = await movieDatabaseApi.get(`/movie/popular`)
			const resolvedMovie = await resolveData(movie, 'movie')

			const data = resolvedTv.concat(resolvedMovie)

			dispatch(setData(data))
		} catch(error) {

			console.log(error)
			dispatch(setData(null))
		}
	}
}