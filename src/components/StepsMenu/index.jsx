/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, LineDiv, ContainerLink } from './styles';

const StepsMenu = ({ page }) => {
  const { menu } = useSelector((state) => state.pedido);
  return (
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

      {menu.passo2 ? (
        <ContainerLink>
          <Link to="passo2">
            Escolha a massa
          </Link>
          {page === 2 ? (
            <span style={{ opacity: 1, backgroundColor: '#04d361' }} />
          ) : (<span />)}
        </ContainerLink>
      ) : (null)}

      {!menu.passo2 ? (
        <ContainerLink style={{ opacity: 0.5 }}>
          <a>
            Escolha a massa
          </a>
        </ContainerLink>
      ) : (null)}

      {menu.passo3 ? (
        <ContainerLink>
          <Link to="passo3">
            Escolha o recheio
          </Link>
          {page === 3 ? (
            <span style={{ opacity: 1, backgroundColor: '#04d361' }} />
          ) : (<span />)}
        </ContainerLink>
      ) : (null)}

      {!menu.passo3 ? (
        <ContainerLink style={{ opacity: 0.5 }}>
          <a>
            Escolha o recheio
          </a>
        </ContainerLink>
      ) : (null)}

      {menu.obrigado ? (
        <ContainerLink>
          <Link to="obrigado">
            Obrigado
          </Link>
          {page === 4 ? (
            <span style={{ opacity: 1, backgroundColor: '#04d361' }} />
          ) : (<span />)}
        </ContainerLink>
      ) : (null)}

      {!menu.obrigado ? (
        <ContainerLink style={{ opacity: 0.5 }}>
          <a>
            Obrigado
          </a>
        </ContainerLink>
      ) : (null)}

      <LineDiv />
    </Container>
  );
};
export default StepsMenu;
