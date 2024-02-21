import { useLocation } from 'react-router-dom';
import {
  HomeBackgroundContainer,
  MovieBackgroundContainer,
} from './background.style';

export default function Background({ image }) {
  const isHome = useLocation().pathname == '/';

  return isHome ? (
    <HomeBackgroundContainer>
      <img src={image} />
    </HomeBackgroundContainer>
  ) : (
    <MovieBackgroundContainer>
      <img src={image} />
    </MovieBackgroundContainer>
  );
}
