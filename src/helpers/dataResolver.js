export const objectConverter = (data, media_type, {favourites}) => {
	return {
		...data,
		title: data.title || data.name,
		media_type: media_type,
		isFavourite: (favourites.includes(data.id))
	}
}

export const dataResolver = (data, media_type, favourites) => {
	const arrayData = [];

	data.data.results.map((data) => {
		arrayData.push(objectConverter(data, media_type, favourites))
	})

	return arrayData
}