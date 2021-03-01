import styled from 'styled-components';

export const ContainerGeneral = styled.div`
  width: 100%;
  max-width: 630px;
  float: right;
`;

export const Pizzas = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;

  div {
    width: 30%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
    cursor: pointer;
    transition: all .4s;
    padding: 1.5%;
    border-radius: 5px;

    &:hover {
      background-color: #F8F5F8;
    }

    img {
      width: 100%;
      height: auto;
    }

    p {
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      color: #1A1A1A;
      margin-top: 10px;

      &:last-child {
        font-size: 13px;
        margin-top: 4px;
      }
    }
  }
`;
