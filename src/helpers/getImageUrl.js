import {imageBaseUrl} from '../api/api.js'

export const getImageBaseUrl = (poster_path, imageWidth = 500) => {
	return `${imageBaseUrl}${imageWidth}${poster_path}`;
}