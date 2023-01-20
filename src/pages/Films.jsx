import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {LoadingSpinner, Message, CardList} from '../components';

export const Films = ({media_type = null}) => {

	const {isLoading, data} = useSelector(store => store.movie)

	const filteredData = useMemo(() => {
		if (!!media_type) {
			return data.filter((item) => (
				item.media_type === media_type
			))
		}

		return data
	}, [media_type, data])

	return (
		<>
			{
				(isLoading)
				? <LoadingSpinner />
				: (filteredData.length !== 0)
					? <CardList data={filteredData} />
					: <Message title={`Ups! Ha ocurrido un error. Por favor intentalo nuevamente.`} />
			}
		</>
	)
}