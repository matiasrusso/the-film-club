export const objectConverter = (data, type, {favourites}) => {
	return {
		...data,
		title: data.title || data.name,
		type: type,
		isFavourite: (favourites.includes(data.id))
	}
}

export const dataResolver = (data, type, favourites) => {
	const arrayData = [];

	data.data.results.map((data) => {
		arrayData.push(objectConverter(data, type, favourites))
	})

	return arrayData
}