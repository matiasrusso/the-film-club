import {Navigate, Route, Routes} from 'react-router-dom';
import {Home, MoviesSeries, Details, Favourites} from './pages';
import {Navbar} from './components';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {startLoadingMovies} from './store/slices/thunk.js';

export const App = () => {

	const dispatch = useDispatch()
	const {data} = useSelector(store => store.movie)

	useEffect(() => {
		dispatch(startLoadingMovies())
	}, [])

	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path={`/movies`} element={<MoviesSeries title="MoviesSeries" type="movie" />} />
				<Route path={`/movies/:id`} element={<Details />} />

				<Route path={`/series`} element={<MoviesSeries title="Series" type="tv" />} />
				<Route path={`/series/:id`} element={<Details />} />

				<Route path="/favourites" element={<Favourites />} />

				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</>
	)

}