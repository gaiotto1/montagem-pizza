import React from 'react';

import StepsMenu from '../../components/StepsMenu';

import ContainerGeneral from './styles';
import Title from '../../components/Title';

const Passo2 = () => (
  <ContainerGeneral>
    <StepsMenu page={2} />
    <Title text="Escolha a massa que usaremos em sua pizza." />
  </ContainerGeneral>
);

export default Passo2;
