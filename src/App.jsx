import {useEffect} from 'react';
import {PageNavbar} from './components';
import {Router as PageRouter} from './routes';
import {useMoviesStore} from './hooks';

export const App = () => {

	const {handleLoadMovies} = useMoviesStore()

	useEffect(() => {
		handleLoadMovies()
	}, [])

	return (
		<>
			<PageNavbar />

			<PageRouter />
		</>
	)

}