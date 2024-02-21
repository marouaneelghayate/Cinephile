import styled from 'styled-components';
import { HomeSearchContainer } from '../home/home.style.jsx';

export const SearchBarContainer = styled(HomeSearchContainer)`
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
