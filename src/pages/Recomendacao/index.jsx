import React from 'react';

import { ContainerGeneral, ContainerPizza, Button } from './styles';

import StepsMenu from '../../components/StepsMenu';
import Title from '../../components/Title';
import Description from '../../components/Description';

import imgPizza from '../../assets/images/alcatra-com-cheddar.png';

const Recomendacao = () => (
  <ContainerGeneral>
    <StepsMenu page={0} />

    <Title text="A recomendação do dia é:" />

    <Description
      name="Alcatra com cheddar - Tam. G"
      desc="Ingredientes: Molho de tomate, alcatra, mussarela, cheddar, azeitonas e orégano."
    />

    <ContainerPizza>
      <img src={imgPizza} alt="pizza" />
    </ContainerPizza>

    <Button>Confirmar Pedido</Button>
  </ContainerGeneral>
);

export default Recomendacao;
