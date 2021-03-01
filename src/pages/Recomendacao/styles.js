import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerGeneral = styled.div`
  width: 100%;
  max-width: 630px;
  margin-bottom: 50px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ContainerPizza = styled.div`
  position: relative;
  width: 95%;
  max-width: 620px;
  margin: auto;
  text-align: center;

  img {
    width: 100%;
    max-width: 330px;
    margin: 40px auto;
    border: 12px solid #FFF;
    border-radius: 50%;
    margin: 40px auto;
  }
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  font-family: Roboto;
  width: 95%;
  max-width: 500px;
  height: 50px;
  cursor: pointer;
  background-color: #04d361;
  color: #FFF;
  border-radius: 3px;
  border: none;
  transition: all .4s;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    background-color: ${shade(0.2, '#04d361')}
  }
`;
