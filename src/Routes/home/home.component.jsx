import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';

import {
  setIsinputfocused,
  setValue,
} from '../../store/slices/searchfield.slice.js';

import Background from '../../components/background/background.component.jsx';
import SearchBar from '../../components/search-bar/search-bar.component.jsx';
import CompactList from '../../components/compact-list/compact-list.component.jsx';

import { HomeSearchContainer } from './home.style.jsx';
import { clearMovies } from '../../store/slices/movies.slice.js';

export default function Home() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const dispatch = useDispatch();

  const { isinputfocused } = useSelector(state => state.searchFieldReducer);
  const { movies } = useSelector(state => state.moviesReducer);
  const [titleWidth, setTitleWidth] = useState(0);

  useEffect(() => {
    const titleWidth = titleRef.current.offsetWidth;
    setTitleWidth(titleWidth);

    const handleClickOutside = event => {
      if (!containerRef.current.contains(event.target)) {
        batch(() => {
          setTimeout(() => {
            dispatch(setIsinputfocused(false));
            dispatch(clearMovies())
          }, movies.length > 0 ? 200 : 2);
          dispatch(setValue(''));
        });
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Background image='/images/home-page.jpg' />
      <div className='home'>
        <h1>
          <img src='/images/logo-transparent.png' width={150} />
          <br />
          CINEPHILE
        </h1>
      </div>
      <HomeSearchContainer
        $isfocused={isinputfocused}
        $moviesLoaded={movies.length}
        ref={containerRef}
        $titleWidth={titleWidth}
      >
        <h3 ref={titleRef} onClick={() => dispatch(setIsinputfocused(true))}>
          Search movie titles
        </h3>
        <SearchBar onChange={true} />
        <CompactList />
      </HomeSearchContainer>
    </>
  );
}
