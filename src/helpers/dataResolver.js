export const objectConverter = (data, media_type, {favourites}) => {
	return {
		...data,
		title: data.title || data.name,
		media_type: media_type,
		isFavourite: (favourites.includes(data.id))
	}
}

export const dataResolver = (data, media_type = null, favourites) => {
	const arrayData = [];

	data.map((data) => {
		arrayData.push(objectConverter(data, (media_type) ? media_type : data.media_type, favourites))
	})

	return arrayData
}