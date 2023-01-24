import {useSelector} from 'react-redux';
import {LoadingSpinner, Message, CardList} from '../components';

export const Films = ({data, errorMessage = `Ups! Ha ocurrido un error. Por favor intentalo nuevamente.`}) => {
	const {isLoading} = useSelector(store => store.movie)

	return (
		<>
			{
				(data.length > 0)
					//? <Message title={message} />
					? <CardList data={data} />
					: <Message title={errorMessage} />
			}
			{
				(isLoading) && <LoadingSpinner />
			}
		</>
	)
}