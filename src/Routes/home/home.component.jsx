import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompactList from '../../components/compact-list/compact-list.component.jsx';
import SearchBar from '../../components/search-bar/search-bar.jsx';
import { HomeContainer } from './home.style.jsx';
import { setIsinputfocused } from '../../store/slices/searchfield.slice.js';
import Background from '../../components/background/background.component.jsx';

export default function Home() {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const bg_path =
    'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQeHEcUpj3JtTaKzNjfNk7JuiGuvS8lQ9_B0wwIdVJZ9d-mJ85Wz6hj2_O1DoPIsJEnEItVxMwkCaqZzcOBNsS_FCHRdawwCd9xURWLxqNCVQ8wbFBSarfPrxyIMZPqLmDNfwSxp25fzQkR7ZJ6tBxiTyzxg.jpg?r=399';

  const isinputfocused = useSelector(
    state => state.searchFieldReducer.isinputfocused
  );
  useEffect(() => {
    const handleClickOutside = event => {
      if (!containerRef.current.contains(event.target)) {
        dispatch(setIsinputfocused(false));
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <>
      <Background image={bg_path} />
      <div className='home'>
        <h1>CINEPHILE</h1>
        <h2>Search movie titles</h2>
      </div>
      <HomeContainer $isfocused={isinputfocused ? 1 : 0} ref={containerRef}>
        <SearchBar onChange={true} />
        <CompactList />
      </HomeContainer>
    </>
  );
}
