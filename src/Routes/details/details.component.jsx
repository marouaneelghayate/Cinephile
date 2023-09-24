import { useSelector } from 'react-redux';
import Background from '../../components/background/background.component';
import { OuterContainer, DetailsContainer, LargeRating } from './details.style';
import { StarRating } from '../../components/search-card/search-card.component';
import Back from '../../components/back/back-button.component';

export default function Details() {
  const { currentMovie } = useSelector(state => state.currentMovieReducer);
  const { title, release_date, selectedGenres, overview, vote_average } =
    currentMovie;
  const rating = Math.round(vote_average) / 2;

  return (
    <>
      <Background image={currentMovie.image_path} />
      <OuterContainer>
      <Back/>
        <DetailsContainer>
          <img
            src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`}
          />
          <div className="details">
            <span className="year">{release_date.slice(-4)}</span>
            <h1>{title}</h1>
            <span>
              {release_date} ({currentMovie.original_language.toUpperCase()})
            </span>
            <span>{selectedGenres}</span>
            <span className="overview">{overview}</span>
            <LargeRating>{StarRating(rating)}</LargeRating>
          </div>
        </DetailsContainer>
      </OuterContainer>
    </>
  );
}
