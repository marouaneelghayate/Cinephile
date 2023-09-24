import styled from 'styled-components';

export const CardContainer = styled.div`
  &:nth-of-type(odd) {
    background: var(--dark-blue);
  }
  &:nth-of-type(even) {
    background: var(--light-blue);
  }
  display: flex;
  gap: 10px;
  height: 70px;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background: #364768;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  padding-left: 10px;

  & img {
    height: 60px;
  }
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 7px;
  & .details {
    font-size: small;
    color: gray;
  }

  & .separator {
    display: inline-block;
    font-size: large;
    margin-inline: 3px;
    translate: 0 1px;
  }
`;