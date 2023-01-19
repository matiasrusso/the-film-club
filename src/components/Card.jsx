import {Link, useLocation} from 'react-router-dom';
import {getImageBaseUrl} from '../helpers'
import {FavButton} from '../components';

export const Card = ({id, title, overview = '', poster_path, vote_average, isFavourite}) => {

	const {pathname} = useLocation()

	return (
		<div className="card" data-id={id}>
			<div className="card-wrapper">

				<FavButton
					isFavourite={isFavourite}
					id={id}
				/>

				<div className="card-image">
					<img
						src={getImageBaseUrl(poster_path)}
						alt={title}
					/>
				</div>

				<div className="card-info">
					<div className="card-info-content">
						<h2 className="card-title">{title}</h2>

						<p className="card-description">{
							(overview.length > 150)
								? `${overview.substr(1, 150)}...`
								: ''
						}</p>

						<div className="card-info-controls">
							<Link className="button" to={`${pathname}/${id}`}>Ver ficha</Link>

							<span className="card-vote vote">Valoración: <strong>{vote_average}</strong></span>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}