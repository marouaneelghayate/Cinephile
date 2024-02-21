import styled from 'styled-components';

export const HomeSearchContainer = styled.div`
  position: relative;
  background: ${({ $isfocused, $moviesLoaded }) => ($moviesLoaded > 0 & $isfocused ? 'var(--dark-blue)' : `hsla(0, 0%, ${$isfocused ? 50 : 30}%, 0.7)`)};
  margin: 5px auto;
  width: ${({ $isfocused, $titleWidth }) => ($isfocused ? '40%' : `${$titleWidth}px`)};
  border-radius: ${({ $moviesLoaded, $isfocused }) => ($moviesLoaded & $isfocused ? '15' : '20')}px;
  translate: 0 ${({ $isfocused }) => ($isfocused ? '18px' : 0)};
  transition: 0.2s ease-out;
  height: max-content;

  & h3 {
    font-weight: normal;
    margin: 0;
    padding: 9px 15px;
    white-space: nowrap;
    position: absolute;
    margin: 0;
    top: 0;
    left: 50%;
    translate: -50% ${({ $isfocused }) => $isfocused && `-36px`};
    transition: 0.2s ease-out;
    cursor: pointer;
    z-index: 3;
  }
`;
