import { combineReducers, configureStore } from '@reduxjs/toolkit';
import genresReducer from './slices/genres.slice';
import moviesReducer from './slices/movies.slice';
import currentMovieReducer from './slices/currentmovie.slice';
import searchFieldReducer from './slices/searchfield.slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';


const persistConfig = {
  key: 'root',
  storage,
};

const combinedReducers = combineReducers({
  genresReducer,
  moviesReducer,
  currentMovieReducer,
  searchFieldReducer,
});

const persistedReducer = persistReducer(persistConfig,combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);


