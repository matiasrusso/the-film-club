import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {LoadingSpinner} from '../components';
import {CardList} from '../components';

export const Films = ({ title, media_type }) => {

	const {isLoading, data} = useSelector(store => store.movie)

	const filteredData = useMemo(() => (
		data.filter((item) => {
			return item.media_type === media_type
		})
	), [media_type, data])

	return (
		<>
			<h1 className="page-title">{title}</h1>

			{
				(isLoading)
				? <LoadingSpinner />
				: <CardList data={filteredData} />
			}
		</>
	)
}