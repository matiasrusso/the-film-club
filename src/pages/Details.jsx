import {useEffect, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useMoviesStore} from '../hooks';
import {LoadingSpinner, Message} from '../components';
import {DataSheet} from '../pages';

export const Details = ({type}) => {
	const {id} = useParams();
	const {activeFilm, isLoading} = useSelector(store => store.movie)
	const {handleActiveFilm} = useMoviesStore();

	useEffect(() => {
		handleActiveFilm(type, id)
	}, [])

	return (
		<div>
			{
				(isLoading)
				? <LoadingSpinner />
				: (activeFilm)
					? <DataSheet {...activeFilm} />
					: <Message
						title="Página no encontrada"
						text="La página que estás buscando es errónea o no existe."
					  />
			}
		</div>
	)
}