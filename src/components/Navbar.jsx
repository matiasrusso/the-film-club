import {NavLink, useNavigate} from 'react-router-dom';
import {Container} from '../components';
import {useState} from 'react';

export const Navbar = () => {

	const navigate = useNavigate()

	const [searchText, setSearchText] = useState({
		searchText: ''
	})

	const onFormSubmit = (e) => {
		e.preventDefault()

		navigate(`/search?q=${searchText}`)
	}

	const onInputChange = ({target}) => {
		setSearchText(target.value)
	}

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
								<li className="navbar-form">
									<form onSubmit={onFormSubmit}>
										<input
											type="search"
											value={searchText.value}
											onChange={onInputChange}
										/>
										<button type="submit">Buscar</button>
									</form>
								</li>
							</ul>
						</div>
					</div>
				</Container>
			</div>
		</>
	)
}