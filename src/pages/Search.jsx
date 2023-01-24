import {useEffect, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string'
import {useMoviesStore} from '../hooks';
import {CardList, FilterNavbar, LoadingSpinner} from '../components';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll.js';
import {Films} from './Films.jsx';

export const Search = () => {

	const {searchData} = useSelector(store => store.movie)
	const {search} = useLocation()
	const {handleSearch} = useMoviesStore()

	useInfiniteScroll(handleSearch)

	const {q = ''} = useMemo(() => queryString.parse(search), [search])

	useEffect(() => {
		handleSearch(q)
	}, [location, q])

	return (
		<div>
			<FilterNavbar />

			<Films
				data={searchData}
				errorMessage={`No se encontraron resultados para "${q}"`}
			/>
		</div>
	)
}