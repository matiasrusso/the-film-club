import {Navigate, Route, Routes} from 'react-router-dom';
import {Details, Favourites, Home, Films} from '../pages';
import {Search} from '../pages';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path={`/movies`} element={<Films title="Películas" type="movie" />} />
			<Route path={`/movies/:id`} element={<Details type="movie" />} />

			<Route path={`/series`} element={<Films title="Series" type="tv" />} />
			<Route path={`/series/:id`} element={<Details type="tv" />} />

			<Route path="/favourites" element={<Favourites />} />

			<Route path="/search" element={<Search />} />

			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	)
}