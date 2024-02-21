import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchForm = styled.form`
  display: flex;
  position: relative;
`;

export const FormInput = styled.input`
  flex-grow: 1;
  width: 10px;
  height: 38px;
  border: none;
  outline: none;
  text-indent: 5px;
  font-size: large;
  transition: 0.2s;
  background: transparent;
  color: ${({ $isfocused }) => ($isfocused ? 'white' : 'var(--light-blue)')};
`;

export const Button = styled.button`
  display: flex;
  color: white;
  background: transparent;
  align-items: center;
  font-size: large;
  padding-inline: 10px;
  color: ${({ $isfocused }) => ($isfocused ? 'white' : 'var(--light-blue)')};
  border: none;
  transition: 0.2s;
  cursor: pointer;
  opacity: ${({$isfocused}) => $isfocused ? '1' : '0'};
  transition: all.2s;
`;

export const SearchIcon = styled(FaSearch)`
  color: white;
`;

