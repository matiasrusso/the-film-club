import axios from 'axios';

const API_KEY = 'cc05bae131b5e023a3c265dfe454b050';

export const imageBaseUrl = `https://image.tmdb.org/t/p/w`;

export const movieDatabaseApi = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: API_KEY
	}
})