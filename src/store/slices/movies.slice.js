import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [],page: 1 },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    clearMovies(state) {
      state.movies = [];
    },
    setPage(state, action ){
      state.page=action.payload;
    }
  },
});

export const { setMovies, clearMovies, setPage } = moviesSlice.actions;

export default moviesSlice.reducer;
