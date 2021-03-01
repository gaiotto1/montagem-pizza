import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import updatePedido from '../../store/modules/pedido/actions';

import StepsMenu from '../../components/StepsMenu';

import { ContainerGeneral } from './styles';
import Title from '../../components/Title';

const Obrigado = () => {
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(updatePedido({}));
  }, []);

  return (
    <ContainerGeneral>
      <StepsMenu page={4} />
      <Title text="Obrigado por pedir com a gente. Estamos preparando seu pedido." />
    </ContainerGeneral>
  );
};

export default Obrigado;
