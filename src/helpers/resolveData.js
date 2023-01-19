export const resolveData = (data, type, {favourites}) => {
	const arrayData = [];

	data.data.results.map((data) => {
		arrayData.push({
			...data,
			title: (data.title) ? data.title : data.name,
			type: type,
			isFavourite: (favourites.includes(data.id))
		})
	})

	return arrayData
}