import styled from 'styled-components';

export const BackButton = styled.button`
  position: absolute;
  top: 18px;
  left: 40px;
  display: flex;
  align-items: center;
  padding: 12px 15px 12px 20px;
  border-radius: 20px;
  color: #fff;
  background: none;
  font-size: 14px;
  font-weight: bold;
  border: none;
  transition: 0.3s;
  cursor: pointer;

  .arrow {
    width: 6px;
    height: 6px;
    margin-right: 3px;
    border-color: #fff;
    border-left: 2px solid;
    border-top: 2px solid;
    position: relative;
    rotate: -45deg;
    transition: 0.3s;


    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: -1px;
      rotate: 45deg;
      width: 3px;
      background-color: #fff;
      transform-origin: bottom right;
      height: 2px;
      opacity: 0;
      transition: .3s;
    }
  }
  &:hover {
    translate: 3px;
    background: hsla(0, 0%, 50%, .5);
    .arrow {
      translate: -7px;

      &:before {
        opacity: 1;
        width: 10px;
      }
    }
  }
`;
