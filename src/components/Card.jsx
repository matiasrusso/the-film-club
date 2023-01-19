import {Link, useLocation} from 'react-router-dom';

const imageWidth = 500;
const imageBaseUrl = `https://image.tmdb.org/t/p/w${imageWidth}`;

export const Card = ({id, title, overview, poster_path, vote_average}) => {

	const {pathname} = useLocation()

	return (
		<div className="card" data-id={id}>
			<div className="card-wrapper">
				<button className="button favourite-button">
					<i className="fa-regular fa-heart"></i>
					{/*<i class="fa-solid fa-heart"></i>*/}
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