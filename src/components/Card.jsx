import {Link, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setFavourite} from '../store/slices/movieSlice.js';
import {useMoviesStore} from '../../public/hooks/useMoviesStore.js';

const imageWidth = 500;
const imageBaseUrl = `https://image.tmdb.org/t/p/w${imageWidth}`;

export const Card = ({id, title, overview, poster_path, vote_average, isFavourite}) => {

	const {pathname} = useLocation()
	const dispatch = useDispatch()
	const {handleFavourites} = useMoviesStore()

	const onFavouriteChange = (id) => {
		handleFavourites(id)
	}

	return (
		<div className="card" data-id={id}>
			<div className="card-wrapper">
				<button
					onClick={() => onFavouriteChange(id)}
					className="button favourite-button"
				>
					{
						(isFavourite)
						? <i className="fa-solid fa-heart"></i>
						: <i className="fa-regular fa-heart"></i>
					}
				</button>
				<div className="card-image">
					<img src={`${imageBaseUrl}/${poster_path}`} />
				</div>
				<div className="card-info">
					<div className="card-info-content">
						<h2 className="card-title">{title}</h2>

						<p className="card-description">{`${overview.substr(1, 150)}...`}</p>

						<div className="card-info-controls">
							<Link className="button" to={`${pathname}/${id}`}>Ver ficha</Link>

							<span className="card-vote">Valoración: <strong>{vote_average}</strong></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}