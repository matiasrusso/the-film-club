import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {PageNavbar} from './components';
import {startLoadingMovies} from './store';
import {Router as PageRouter} from './routes';

export const App = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startLoadingMovies())
	}, [])

	return (
		<>
			<PageNavbar />

			<PageRouter />
		</>
	)

}