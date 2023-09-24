import { createSlice } from '@reduxjs/toolkit';

const searchFieldSlice = createSlice({
  name: 'searchfield',
  initialState: {
    isinputfocused: false,
    value: '',
  },
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
    setIsinputfocused(state, action) {
      state.isinputfocused = action.payload
    }
  },
});

export const { setValue, setIsinputfocused } = searchFieldSlice.actions;

export default searchFieldSlice.reducer;
