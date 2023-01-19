import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from './pages';
import {MoviesSeries} from './pages';
import {Navbar} from './components';
import {Details} from './pages';

export const App = () => {

	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path={`/movies`} element={<MoviesSeries title="MoviesSeries" type="movie" />} />
				<Route path={`/movies/:id`} element={<Details />} />

				<Route path={`/series`} element={<MoviesSeries title="Series" type="tv" />} />
				<Route path={`/series/:id`} element={<Details />} />

				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</>
	)

}