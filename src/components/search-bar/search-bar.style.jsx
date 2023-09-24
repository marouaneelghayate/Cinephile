import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
`;

export const FormInput = styled.input`
  flex-grow: 1;
  height: 38px;
  border: none;
  outline: none;
  text-indent: 5px;
  font-size: large;
  transition: 0.2s;
  background: ${({ $isfocused }) => ($isfocused ? 'var(--light-blue)' : 'white')};
  color: ${({ $isfocused }) => ($isfocused ? 'white' : 'var(--light-blue)')};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: large;
  padding-inline: 10px;
  background: ${({ $isfocused }) => ($isfocused ? 'var(--light-blue)' : 'white')};
  color: ${({ $isfocused }) => ($isfocused ? 'white' : 'var(--light-blue)')};
  border: none;
  transition: 0.2s;
  cursor: pointer;
`;

