import React from 'react';

import StepsMenu from '../../components/StepsMenu';

import ContainerGeneral from './styles';
import Title from '../../components/Title';

const Passo1 = () => (
  <ContainerGeneral>
    <StepsMenu page={1} />
    <Title text="Escolha o tamanho da sua pizza." />
  </ContainerGeneral>
);

export default Passo1;
