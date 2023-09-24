/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import { BackgroundContainer } from './background.style';

export default function Background({ image }) {
  const { pathname } = useLocation();
  return (
    <BackgroundContainer $isHome={pathname == '/' ? 1 : 0}>
      <img src={image} />
    </BackgroundContainer>
  );
}
