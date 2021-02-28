import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerGeneral = styled.div`
  width: 100%;
  max-width: 630px;
  float: right;
`;

export const ContainerTamanhos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Item = styled.button`
  width: 30%;
  height: 150px;
  background-color: #F8F5F8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${shade(0.2, '#F8F5F8')}
  }

  p {
    font-family: Roboto;
    font-weight: 500;
    font-size: 22px;
    color: #333;
  }
`;
