import styled from 'styled-components';

export const MoviesList = styled.div`
  display: grid;
  max-height: 400px;
  overflow: hidden;
  grid-template-rows: ${({ $isfocused }) => ($isfocused ? '1fr' : '0fr')};
  background: ${({ $isfocused }) => ($isfocused ? 'var(--light-blue)' : 'white')};
  transition: 0.2s;
  & p,
  div {
    margin: 0;
    overflow: hidden;
  }
  & p {
    margin-left: 10px;
    line-height: 30px;
  }
  & .movies {
    display: inline-block;
    margin-left: 20px;
    padding-bottom: 3px;
    font-size: 0.9em;
    border-bottom: 1px solid hsla(0, 0%, 100%);
    translate: 0 1px;
  }
  & hr {
    margin: 0;
    width: 100%;
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    border-top: none;
  }
  & .seeMore {
    display: block;
    text-align: center;
    padding: 7px;
    background: var(--dark-blue);
  }
  & a {
    color: lightgray;
    text-decoration: none;
  }
`;
