/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardContainer,
  ImageContainer,
  DetailsContainer,
} from './movie-card.style';
import { FaStar as Star } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { setCurrentMovie } from '../../store/slices/currentmovie.slice';

export default function MovieCard({ movie }) {
  const genres = useSelector(state => state.genresReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedGenres = movie.genre_ids
    .map(id => genres.find(genre => genre.id === id).name)
    .slice(0, 3)
    .map(genre => genre.toLowerCase())
    .join(', ');

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
    <CardContainer onClick={handleClick}>
      <ImageContainer>
        <img
          src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
          alt="loading.."
        />
      </ImageContainer>
      <DetailsContainer>
        <span className="title">{movie.title}</span>
        <div className="details">
          <span className="details">{movie.release_date.slice(0, 4)}</span>
          <span className="separator">•</span>
          <span className="details">
            <Star /> {movie.vote_average.toFixed(1)}
          </span>
          <span className="separator">•</span>
          <span className="details">{selectedGenres}</span>
        </div>
      </DetailsContainer>
    </CardContainer>
  );
}
