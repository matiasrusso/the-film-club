import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Navbar} from './components';
import {startLoadingMovies} from './store';
import {Router as PageRouter} from './routes';

export const App = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startLoadingMovies())
	}, [])

	return (
		<>
			<Navbar />

			<PageRouter />
		</>
	)

}