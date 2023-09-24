import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 220px;
  height: 350px;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: end;
  transition: .3s;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      transparent 0%,
      hsla(0, 0%, 0%, 0.7) 50%,
      hsla(0, 0%, 0%, 0.9) 60%,
      black 100%
    );
    z-index: -1;
    transition: 0.3s;
    opacity: ${({ $isHovered }) => ($isHovered ? 0 : 1)};
  }
  &:hover {
    
  }
`;

export const Poster = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  /* filter: ${({ $isHovered }) => ($isHovered ? 'unset' : 'saturate(60%)')}; */
  transition: 0.3s;
  scale: ${({ $isHovered }) => ($isHovered ? ' 1.1' : '1')};
`;

export const DetailsContainer = styled.div`
  width: 100%;
  height: ${({ $isHovered }) => ($isHovered ? '100%' : '40%')};
  padding-top: 15px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  /* justify-content: end; */
  padding-inline: 12px;
  transition: .3s;
  background: ${({ $isHovered }) =>
    $isHovered ? 'hsla(0, 0%, 0%, .9)' : 'none'};
  .separator {
    font-weight: bold;
    opacity: 0.5;
  }
`;

export const Details = styled.div`
  color: gray;
  font-size: 0.84em;
  white-space: ${({ $isHovered }) => ($isHovered ? 'normal' : 'nowrap')};
  overflow: hidden;
  display: flex;
  gap: 3px;
  flex-flow: ${({ $isHovered }) => ($isHovered ? 'column' : 'row')};
`;

export const Title = styled.span`
  padding-bottom: 2px;
  color: white;
  overflow: hidden;
  white-space: ${({ $isHovered }) => ($isHovered ? 'normal' : 'nowrap')};
  font-size: ${({ $isHovered }) => ($isHovered ? 'large' : 'medium')};
  text-transform: uppercase;
`;
export const OverView = styled.div`
  margin-top: 8px;
  font-size: ${({ $isHovered }) => ($isHovered ? '1em' : '0.75em')};
  color: hsl(0, 0%, 70%);
  white-space: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $isHovered }) => ($isHovered ? 8 : 3)};
  -webkit-box-orient: vertical;
`;

export const Rating = styled.div`
  position: absolute;
  bottom: 0;
  margin-block: 7px;
  font-size: large;
  display: flex;
  gap: 1px;
`;
