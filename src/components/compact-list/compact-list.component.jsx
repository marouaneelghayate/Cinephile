import { useSelector } from 'react-redux';

import MovieCard from '../movie-card/movie-card.component';
import { Link } from 'react-router-dom';
import { MoviesList } from './compact-list.style';

function CompactList() {
  const { movies } = useSelector(state => state.moviesReducer);
  const { value, isinputfocused } = useSelector(
    state => state.searchFieldReducer
  );

  return (
    <MoviesList $isfocused={isinputfocused} $inputHasValue={value != ''}>
      {movies.length > 0 ? (
        <div>
          <span className='movies'>Movies</span>
          <hr />
          {movies.slice(0, 4).map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
          <hr />
          <span className='seeMore'>
            <Link to='search'>+ See more</Link>
          </span>
        </div>
      ) : value != '' && (
        <p>no results.</p>
      )}
    </MoviesList>
  );
}

export default CompactList;
