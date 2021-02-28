import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const LineDiv = styled.div`
  width: 100%;
  height: 3px;
  background-color: #E5E5E5;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ContainerLink = styled.div`
  max-width: 150px;

  a {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    color: #1A1A1A;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    height: 38px;
    line-height: 38px;
  }

  span {
    width: 100%;
    height: 3px;
    background-color: #1A1A1A;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 10;
    opacity: 0;
    transition: all .4s;
  }

  &:hover span{
    opacity: 1;
  }
`;
