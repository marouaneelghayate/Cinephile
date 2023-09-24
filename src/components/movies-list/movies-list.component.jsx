/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Grid, MoviesList } from './movies-list.style';
import SearchCard from '../search-card/search-card.component';

function MovieList() {
  const movies = useSelector(state => state.moviesReducer.movies);
  const { isinputfocused, value } = useSelector(
    state => state.searchFieldReducer
  );

  return (
    <MoviesList $isfocused={isinputfocused ? 1 : 0}>
      {movies.length > 0 ? (
        <div>
          <Grid>
            {movies.map(movie => (
              <SearchCard movie={movie} key={movie.id} />
            ))}
          </Grid>
        </div>
      ) : (
        <p>no results for &#34;{value}&#34;</p>
      )}
    </MoviesList>
  );
}

export default MovieList;
