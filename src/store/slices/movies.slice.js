import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [] },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    clearMovies(state) {
      state.movies = [];
    },
  },
});

export const { setMovies, clearMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
