import {Navigate, Route, Routes} from 'react-router-dom';
import {Details, Favourites, Home, Search} from '../pages';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path={`/movie`} element={<Home />} />
			<Route path={`/movie/:id`} element={<Details media_type="movie" />} />

			<Route path={`/tv`} element={<Home />} />
			<Route path={`/tv/:id`} element={<Details media_type="tv" />} />

			<Route path="/favourites" element={<Favourites />} />

			<Route path="/search" element={<Search />} />

			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	)
}