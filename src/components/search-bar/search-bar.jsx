/* eslint-disable react/prop-types */
import { FaSearch as SearchIcon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovies from '../../utils/fetchMovies';
import { setMovies, clearMovies } from '../../store/slices/movies.slice.js';
import {
  setValue,
  setIsinputfocused,
} from '../../store/slices/searchfield.slice';
import { SearchForm, FormInput, Button } from './search-bar.style.jsx';

function SearchBar({ onChange }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isinputfocused, value } = useSelector(
    state => state.searchFieldReducer
  );

  const handleSubmit = event => {
    event.preventDefault();
    if (!onChange && value.trim() !== '') {
      fetchMovies(value).then(movies => dispatch(setMovies(movies)));
    }
    navigate('/search');
  };

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setValue(value));
    if (!onChange) return;

    if (value.trim() == '') {
      dispatch(clearMovies());
    } else {
      fetchMovies(value).then(movies => dispatch(setMovies(movies)));
    }
  };

  return (
    <SearchForm $isfocused={isinputfocused ? 1 : 0} onSubmit={handleSubmit}>
      <Button $isfocused={isinputfocused ? 1 : 0}>
        <SearchIcon />
      </Button>
      <FormInput
        required
        value={value}
        $isfocused={isinputfocused ? 1 : 0}
        onChange={e => handleChange(e)}
        type="text"
        onFocus={() => dispatch(setIsinputfocused(true))}
      />
    </SearchForm>
  );
}

export default SearchBar;
