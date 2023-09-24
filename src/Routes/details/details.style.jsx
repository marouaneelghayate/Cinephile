import styled from 'styled-components';
import { Rating } from '../../components/search-card/search-card.style';

export const OuterContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: end;
`;

export const DetailsContainer = styled.div`
  height: max-content;
  height: 70%;
  padding: 60px;
  display: flex;
  gap: 30px;
  img {
    height: 100%;
    border-radius: 8px;
  }

  .details {
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    font-size: large;
    text-shadow: 0 0 5px black;
    position: relative;

    .year {
      color: lightgray;
      font-size: medium;
    }
    h1 {
      margin: 0;
      font-weight: normal;
      text-transform: uppercase;
    }
    h1 + span {
      margin-block: 10px;
    }

    .overview {
      margin-top: 30px;
      width: 70%;
      color: lightgray;
      font-size: larger;
    }
  }
`;

export const LargeRating = styled(Rating)`
  font-size: x-large;
  color: gold;
`;
