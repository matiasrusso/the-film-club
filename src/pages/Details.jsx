import {useParams} from 'react-router-dom';

export const Details = () => {
	const { heroId } = useParams();

	return (
		<h1>Detalles: {heroId}</h1>
	)
}