// import { useContext, useEffect,useState } from "react";
import { useEffect, useRef } from 'react';
import SearchBar from '../../components/search-bar/search-bar.jsx';
import { SearchBarContainer, SearchContainer } from './search.style';
import { useDispatch, useSelector } from 'react-redux';
import { setIsinputfocused } from '../../store/slices/searchfield.slice';
import MovieList from '../../components/movies-list/movies-list.component.jsx';
import Back from '../../components/back/back-button.component.jsx';
// import { BackgroundContainer } from '../../components/background/background.component';

export default function Search() {
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const { isinputfocused } = useSelector(
    state => state.searchFieldReducer
  );
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        dispatch(setIsinputfocused(false));
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <SearchContainer>
      <Back/>
      <h2>Search other movies</h2>
      <SearchBarContainer
        $isfocused={isinputfocused ? 1 : 0}
        ref={containerRef}
      >
        <SearchBar onChange={false} />
      </SearchBarContainer>
      <MovieList />
    </SearchContainer>
  );
}
