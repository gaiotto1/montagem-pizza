import React from 'react';

import StepsMenu from '../../components/StepsMenu';

import ContainerGeneral from './styles';
import Title from '../../components/Title';

const Passo3 = () => (
  <ContainerGeneral>
    <StepsMenu page={3} />
    <Title text="Agora é a hora mais legal! Escolha um de nossos recheios incríveis para a sua pizza." />
  </ContainerGeneral>
);

export default Passo3;
