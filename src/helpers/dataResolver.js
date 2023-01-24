export const objectConverter = (data, media_type, {favourites}, page = 1) => {
	return {
		...data,
		title: data.title || data.name,
		media_type: media_type,
		isFavourite: (favourites.includes(data.id)),
		page: page
	}
}

export const dataResolver = (data, media_type = null, favourites, page = null) => {
	const arrayData = [];

	data.map((data) => {
		arrayData.push(objectConverter(data, (media_type) ? media_type : data.media_type, favourites, page))
	})

	return arrayData
}