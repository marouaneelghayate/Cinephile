import styled from 'styled-components';
import { HomeContainer } from '../home/home.style.jsx';

export const SearchBarContainer = styled(HomeContainer)`
  width: 50%;
  border-radius: 20px;
`;

export const SearchContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  & h2 {
    margin: 0;
    padding-block: 30px;
    text-align: center;
    font-weight: normal;
  }
`;
