import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
  & img {
    width: 100%;
    height: 100%;
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
  }
`;

export const HomeBackgroundContainer = styled(BackgroundContainer)`
  filter: grayscale(80%) hue-rotate(200deg) blur(2px);
  &:after {
    background: linear-gradient(
      hsl(201, 100%, 3%),
      hsla(201, 100%, 3%, 0.7) 50%,
      transparent
    );
  }
`;

export const MovieBackgroundContainer = styled(BackgroundContainer)`
  filter: brightness(50%);
  &:after {
    background: radial-gradient(
      50% 90% at center,
      transparent,
      hsla(0, 0%, 0%, 0.7)
    );
  }
`;
