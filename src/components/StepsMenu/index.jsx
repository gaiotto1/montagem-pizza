import React from 'react';
import { Link } from 'react-router-dom';
import { Container, LineDiv, ContainerLink } from './styles';

const StepsMenu = ({ page }) => (
  <Container>
    <ContainerLink>
      <Link to="/">
        Recomendação do dia
      </Link>
      {page === 0 ? (
        <span style={{ opacity: 1, backgroundColor: '#04d361' }} />
      ) : (<span />)}
    </ContainerLink>
    <ContainerLink>
      <Link to="/passo1">
        Escolha o tamanho
      </Link>
      {page === 1 ? (
        <span style={{ opacity: 1, backgroundColor: '#04d361' }} />
      ) : (<span />)}
    </ContainerLink>
    <ContainerLink>
      <Link to="passo2">
        Escolha a massa
      </Link>
      {page === 2 ? (
        <span style={{ opacity: 1, backgroundColor: '#04d361' }} />
      ) : (<span />)}
    </ContainerLink>
    <ContainerLink>
      <Link to="passo3">
        Escolha o recheio
      </Link>
      {page === 3 ? (
        <span style={{ opacity: 1, backgroundColor: '#04d361' }} />
      ) : (<span />)}
    </ContainerLink>
    <LineDiv />
  </Container>
);
export default StepsMenu;
