import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useMemo} from 'react';
import {startLoadingMovies} from '../store/slices/thunk.js';
import {Card, LoadingSpinner} from '../components';
import {CardList} from '../components/CardList.jsx';

export const MoviesSeries = ({ title, type }) => {
	const dispatch = useDispatch()
	const {isLoading, data} = useSelector(store => store.movie)

	useEffect(() => {
		dispatch(startLoadingMovies(type))
	}, [type])

	const filteredData = useMemo(() => (
		data.filter((item) => {
			return item.type === type
		})
	), [type, data])

	return (
		<>
			<h1>{title}</h1>

			{
				(isLoading)
				? <LoadingSpinner />
				: <CardList data={filteredData} />
			}
		</>
	)
}