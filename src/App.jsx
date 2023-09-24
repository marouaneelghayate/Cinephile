import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setGenres } from './store/slices/genres.slice';
import fetchGenres from './utils/fetchGenres';
import Home from './Routes/home/home.component'
import Search from './Routes/search/search.component';
import Details from './Routes/details/details.component';
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch()
    useEffect(() => {
        fetchGenres().then(genres => {
          dispatch(setGenres(genres));
        });
    }, [dispatch]);

  return (
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="search" element={<Search/>} /> 
      <Route path="details" element={<Details/>} /> 
      
    </Routes>
  );
}

export default App
