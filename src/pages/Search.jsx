import {useEffect, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string'
import {useMoviesStore} from '../hooks';
import {CardList} from '../components';

export const Search = () => {

	const {searchData} = useSelector(store => store.movie)
	const {search} = useLocation()
	const {handleSearch} = useMoviesStore()

	const {q = ''} = useMemo(() => queryString.parse(search), [search])

	useEffect(() => {
		handleSearch(q)
	}, [location, q])

	return (
		<div>
			<CardList data={searchData} />
		</div>
	)
}