import {useSelector} from 'react-redux';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {Container} from '../components';

export const PageNavbar = () => {

	const navigate = useNavigate()
	const {favourites} = useSelector(store => store.movie)

	return (
		<>
			<div className="navbar">
				<Container>
					<nav className="navbar-container">
						<div className="logo">
							<Link to="/" >
								<img src="/imgs/favicon.svg" alt="The Film Club" />
								The Film Club
							</Link>
						</div>
						<div className="navbar-links">
							<ul>
								<li className="navbar-link">
									<NavLink to="/" className={ ({isActive}) => `${(isActive) ? 'active' : ''}`} >Inicio</NavLink>
								</li>
								<li className="navbar-link badge-container">
									<NavLink to="/favourites" className={ ({isActive}) => `${(isActive) ? 'active' : ''}`} >Favoritos
										<span className="badge">{favourites.length}</span>
									</NavLink>
								</li>
							</ul>
						</div>
					</nav>
				</Container>
			</div>
		</>
	)
}