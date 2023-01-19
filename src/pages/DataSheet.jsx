import {getImageBaseUrl} from '../helpers';
import {FavButton} from '../components/index.js';

export const DataSheet = ({id, title, isFavourite, vote_average, poster_path, overview, genres}) => {

	return (
		<div className="detail">
			<div className="detail-wrapper">

				<FavButton
					isFavourite={isFavourite}
					id={id}
				/>

				<div className="detail-poster-content">
					<div className="detail-poster">
						<div className="detail-poster-bg"
						     style={{
							     backgroundImage: `url(${getImageBaseUrl(poster_path)})`
						     }}
						></div>

						<img
							src={getImageBaseUrl(poster_path)}
							alt={title}
						/>
					</div>
				</div>

				<div className="detail-info">
					<div className="detail-title">
						<h1>{title}</h1>
					</div>

					<div className="detail-info-wrapper">
						<div className="detail-genres">
							<ul>
								{
									genres.map((genre) => {
										return <li key={genre.id}>{genre.name}</li>
									})
								}
							</ul>
						</div>

						<div className="detail-vote">
							<span className="card-vote vote">Valoración: <strong>{Math.round(vote_average * 10) / 10}</strong></span>
						</div>
					</div>

					<div className="detail-overview">
						<p>{overview}</p>
					</div>
				</div>

			</div>
		</div>
	)
}