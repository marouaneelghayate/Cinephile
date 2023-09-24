import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 80%;
  margin: auto;
  border-radius: ${({ $isfocused }) => ($isfocused ? '10px' : '20px')};
  overflow: hidden;
  transition: 0.2s;
`;
