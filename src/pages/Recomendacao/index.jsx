import React from 'react';

import { ContainerGeneral, ContainerPizza, Button } from './styles';

import StepsMenu from '../../components/StepsMenu';
import Title from '../../components/Title';
import Description from '../../components/Description';

import imgPizza from '../../assets/images/alcatra-com-cheddar.png';

const Recomendacao = () => (
  <ContainerGeneral>
    <StepsMenu page={0} />

    <Title text="Recomendação do dia:" />

    <Description
      name="Alcatra com cheddar - Tam. G"
      desc="Molho de tomate, alcatra, mussarela, cheddar, azeitonas e orégano."
    />

    <ContainerPizza>
      <img src={imgPizza} alt="pizza" />
    </ContainerPizza>

    <Button onClick={() => { console.log('ok'); }}>Confirmar Pedido</Button>
  </ContainerGeneral>
);

export default Recomendacao;
