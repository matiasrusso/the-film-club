import {createSlice} from '@reduxjs/toolkit';

export const movieSlice = createSlice({
	name: 'movie',
	initialState: {
		data: [],
		isLoading: false,
		favourites: JSON.parse(localStorage.getItem("favouritesMovies")) || []
	},
	reducers: {
		setLoading: (state) => {
			state.isLoading = true
		},
		setData: (state, {payload}) => {
			state.data = payload
			state.isLoading = false
		},
		setFavourite: (state, {payload}) => {
			state.favourites = JSON.parse(localStorage.getItem("favouritesMovies")) || [];
			state.data = state.data.map((item) => {
				if (item.id === payload) {
					return {
						...item,
						isFavourite: (state.favourites.includes(payload))
					}
				}

				return item
			})
		}
	}
});

export const {
	setData,
	setLoading,
	setFavourite
} = movieSlice.actions;