import {createSlice} from '@reduxjs/toolkit';

export const movieSlice = createSlice({
	name: 'movie',
	initialState: {
		data: [],
		searchData: [],
		activeFilm: null,
		isLoading: false,
		favourites: JSON.parse(localStorage.getItem("favouritesMovies")) || []
	},
	reducers: {
		setLoading: (state) => {
			state.isLoading = true
		},
		setData: (state, {payload}) => {
			state.data = payload;
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

			state.activeFilm = {
				...state.activeFilm,
				isFavourite: (state.favourites.includes(payload))
			}

			state.isLoading = false
		},
		setActiveFilm: (state, {payload}) => {
			state.activeFilm = payload;
			state.isLoading = false
		},
		setSearchData: (state, {payload}) => {
			state.searchData = payload;
			state.isLoading = false
		}
	}
});

export const {
	setData,
	setLoading,
	setFavourite,
	setActiveFilm,
	setSearchData
} = movieSlice.actions;