import { createSlice } from '@reduxjs/toolkit';

const currentMovieSlice = createSlice({
  name: 'currentMovie',
  initialState: { currentMovie: {} },
  reducers: {
    setCurrentMovie(state, action) {
      state.currentMovie = action.payload;
    }
  },
});

export const { setCurrentMovie } = currentMovieSlice.actions;

export default currentMovieSlice.reducer;
