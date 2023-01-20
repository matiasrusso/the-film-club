import {useNavigate} from 'react-router-dom';
import {helper} from '../helpers';
import {Container, FavButton} from '../components';

export const DataSheet = ({id, title, isFavourite, vote_average, poster_path, overview, genres}) => {

	const navigate = useNavigate()

	const onGoBack = () => {
		navigate(-1)
	}

	return (
		<Container>
			<div className="detail fadeIn">
				<div className="detail-wrapper">

					<button
						onClick={onGoBack}
						className="button back-button"
					>
						<span className="sr-only">Volver</span>
						<i className="fa-solid fa-arrow-left"></i>
					</button>

					<FavButton
						isFavourite={isFavourite}
						id={id}
					/>

					<div className="detail-poster-content">
						<div className="detail-poster">
							<div className="detail-poster-bg"
							     style={{
								     backgroundImage: `url(${helper.getImageBaseUrl(poster_path)})`
							     }}
							></div>

							<img
								src={helper.getImageBaseUrl(poster_path)}
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
		</Container>
	)
}