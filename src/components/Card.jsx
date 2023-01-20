import {Link} from 'react-router-dom';
import {helper} from '../helpers'
import {FavButton} from '../components';

export const Card = ({id, title, overview = '', poster_path, vote_average, isFavourite, media_type}) => {

	return (
		<div className="card" data-id={id}>
			<div className="card-wrapper">
				<div className="card-media-type">
					<span>{
						helper.getSectionName(media_type)
					}</span>
				</div>

				<FavButton
					isFavourite={isFavourite}
					id={id}
				/>

				<div className="card-image">
					<div className="card-image-placeholder"></div>
					<img
						src={helper.getImageBaseUrl(poster_path)}
						alt={title}
					/>
				</div>

				<div className="card-info">
					<div className="card-info-content">
						<h2 className="card-title">{
							(title.length > 35)
								? `${title.slice(0,35)}...`
								: title
						}</h2>

						<p className="card-description">{
							(overview.length > 150)
								? `${overview.slice(0, 150)}...`
								: overview
						}</p>

						<div className="card-info-controls">
							<Link
								className="button"
								to={`/${media_type}/${id}`}
							>Ver ficha</Link>

							<span className="card-vote vote">Valoración: <strong>{vote_average}</strong></span>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}