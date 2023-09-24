/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';

import MovieCard from '../movie-card/movie-card.component';
import { Link } from 'react-router-dom';
import { MoviesList } from './compact-list.style';

function CompactList() {
  const movies = useSelector(state => state.moviesReducer.movies);
  const { value, isinputfocused } = useSelector(
    state => state.searchFieldReducer
  );

  return (
    <MoviesList $isfocused={isinputfocused ? 1 : 0}>
      {value == '' ? (
        <p>Enter a movie name.</p>
      ) : movies.length > 0 ? (
        <div>
          <span className="movies">Movies</span>
          <hr />
          {movies.slice(0, 4).map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
          <hr />
          <span className="seeMore">
            <Link to="search">+ See more</Link>
          </span>
        </div>
      ) : (
        <p>no results.</p>
      )}
    </MoviesList>
  );
}

export default CompactList;
