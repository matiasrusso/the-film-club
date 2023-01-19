import {NavLink} from 'react-router-dom';
import {LoadingSpinner, Container} from '../components';

export const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<Container>
					<div className="navbar-container">
						<div className="logo">
							<p><strong>MovieApp</strong></p>
						</div>
						<div className="navbar-links">
							<ul>
								<li className="navbar-link">
									<NavLink to="/" className={ ({isActive}) => `${(isActive) ? 'active' : ''}`} >Inicio</NavLink>
								</li>
								<li className="navbar-link">
									<NavLink to="/movies" className={ ({isActive}) => `${(isActive) ? 'active' : ''}`} >Películas</NavLink>
								</li>
								<li className="navbar-link">
									<NavLink to="/series" className={ ({isActive}) => `${(isActive) ? 'active' : ''}`} >Series</NavLink>
								</li>
								<li className="navbar-link">
									<NavLink to="/favourites" className={ ({isActive}) => `${(isActive) ? 'active' : ''}`} >Favoritos</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</Container>
			</div>
		</>
	)
}