import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovies from '../../utils/fetchMovies.js';
import { setMovies, clearMovies } from '../../store/slices/movies.slice.js';
import {
  setValue,
  setIsinputfocused,
} from '../../store/slices/searchfield.slice.js';
import {SearchForm, FormInput, Button, SearchIcon } from './search-bar.style.jsx';

function SearchBar({ onChange }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null)

  const { isinputfocused, value } = useSelector(
    state => state.searchFieldReducer
  );

  useEffect(() => {
    isinputfocused && inputRef.current.focus()
  }, [isinputfocused])

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
    <SearchForm $isfocused={isinputfocused} onSubmit={handleSubmit}>
      <Button $isfocused={isinputfocused}>
        <SearchIcon />
      </Button>
      <FormInput
      ref={inputRef}
        required
        value={value}
        $isfocused={isinputfocused}
        onChange={e => handleChange(e)}
        type="text"
        onFocus={() => dispatch(setIsinputfocused(true))}
      />
    </SearchForm>
  );
}

export default SearchBar;
