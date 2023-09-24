import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
  & img {
    width: 100%;
    height: 100%;
    filter: ${({ $isHome }) =>
      $isHome ? 'grayscale(80%) hue-rotate(200deg)' : 'brightness(50%)'};
    object-fit: cover;
    z-index: 0;
    display: block;
  }
  &:after {
    content: '';
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: radial-gradient(
      50% 90% at center,
      transparent,
      rgba(0, 0, 0, 0.705)
    );
  }
`;
