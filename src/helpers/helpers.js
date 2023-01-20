import {imageBaseUrl} from '../api/api.js';

export const helper = {
	getSectionName: (mediaType) => {
		return (mediaType === 'tv')
			? 'Series'
			: 'Películas'
	},
	getImageBaseUrl: (poster_path, imageWidth = 500) => {
		return `${imageBaseUrl}${imageWidth}${poster_path}`;
	}
}