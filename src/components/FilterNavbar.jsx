import {useMemo, useState} from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import queryString from 'query-string';

export const FilterNavbar = () => {

	const navigate = useNavigate();
	const {search} = useLocation()

	const {q = ''} = useMemo(() => queryString.parse(search), [search])

	const [searchText, setSearchText] = useState(q)

	const onFormSubmit = (e) => {
		e.preventDefault()

		navigate(`/search?q=${searchText}`)
	}

	const onInputChange = ({target}) => {
		setSearchText(target.value)
	}

	return (
		<ul className="filter-nav">
			<li className="navbar-link">
				<NavLink to="/" className={ ({isActive}) => `${(isActive) ? 'active' : ''}`} >Todo</NavLink>
			</li>
			<li className="navbar-link">
				<NavLink to="/movie" className={ ({isActive}) => `${(isActive) ? 'active' : ''}`} >Películas</NavLink>
			</li>
			<li className="navbar-link">
				<NavLink to="/tv" className={ ({isActive}) => `${(isActive) ? 'active' : ''}`} >Series</NavLink>
			</li>
			<li className="navbar-form">
				<div className="searchform">
					<div className="searchform-content">
						<form onSubmit={onFormSubmit}>
							<input
								className="searchform-field"
								type="search"
								placeholder="Buscar película o serie..."
								value={searchText}
								onChange={onInputChange}
							/>
							<button type="submit" className="searchform-button">
								<span className="sr-only">Buscar</span>
								<i className="fa-solid fa-magnifying-glass"></i>
							</button>
						</form>
					</div>
				</div>
			</li>
		</ul>
	)
}