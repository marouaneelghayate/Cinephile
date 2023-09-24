/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMovie } from '../../store/slices/currentmovie.slice';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import {
  CardContainer,
  Poster,
  DetailsContainer,
  Title,
  Details,
  OverView,
  Rating,
} from './search-card.style';

export const StarRating = rating => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return stars;
};

export default function SearchCard({ movie }) {
  const genres = useSelector(state => state.genresReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const selectedGenres = movie.genre_ids
    .map(id => genres.find(genre => genre.id === id).name)
    .slice(0, 3)
    .map(genre => genre.toLowerCase())
    .join(', ');

  const rating = Math.round(movie.vote_average) / 2;


  const handleClick = () => {
    const release_date = new Date(movie.release_date).toLocaleDateString(
      'en-US',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
    );
    const image_path =
      'https://image.tmdb.org/t/p/original' + movie.backdrop_path;

    dispatch(
      setCurrentMovie({
        ...movie,
        selectedGenres,
        release_date,
        image_path,
      })
    );
    navigate('/details');
  };

  return (
    <CardContainer
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered ? 1 : 0}
    >
      <Poster
        $isHovered={isHovered ? 1 : 0}
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt="loading.."
      />
      <DetailsContainer $isHovered={isHovered ? 1 : 0}>
        <Title $isHovered={isHovered ? 1 : 0}>{movie.title}</Title>
        <Details $isHovered={isHovered ? 1 : 0}>
          <span>
            {isHovered ? 'Year: ' : ''} {movie.release_date.slice(0, 4)}
          </span>
          {!isHovered && <span className="separator">|</span>}

          <span>
            {isHovered ? 'Language: ' : ''} {movie.original_language}
          </span>
          {selectedGenres.lenght != 0 && (
            <>
              {!isHovered && <span className="separator">|</span>}
              <span className="details genre">{selectedGenres}</span>
            </>
          )}
        </Details>
        <OverView $isHovered={isHovered ? 1 : 0}>{movie.overview}</OverView>

        <Rating>{StarRating(rating)}</Rating>
      </DetailsContainer>
    </CardContainer>
  );
}
