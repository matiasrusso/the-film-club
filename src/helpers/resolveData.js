export const resolveData = (data, type) => {
	const arrayData = [];

	data.data.results.map((data) => {
		arrayData.push({
			...data,
			title: (data.title) ? data.title : data.name,
			type: type
		})
	})

	return arrayData
}