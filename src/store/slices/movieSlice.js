import {createSlice} from '@reduxjs/toolkit';

export const movieSlice = createSlice({
	name: 'movie',
	initialState: {
		data: [],
		favourites: [],
		isLoading: false
	},
	reducers: {
		setLoading: (state) => {
			state.isLoading = true
		},
		setData: (state, {payload}) => {
			state.data = payload
			state.isLoading = false
		}
	}
});

export const {
	setData,
	setLoading
} = movieSlice.actions;