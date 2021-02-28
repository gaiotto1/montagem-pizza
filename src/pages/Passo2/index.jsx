import React, { useState, useEffect } from 'react';

import StepsMenu from '../../components/StepsMenu';

import { ContainerGeneral, ContainerMassas, Item } from './styles';
import Title from '../../components/Title';

const Passo2 = () => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    setSizes([
      {
        id: 1,
        name: 'Massa napolitana',
      },
      {
        id: 2,
        name: 'Massa nova-iorquina',
      },
      {
        id: 3,
        name: 'Massa siciliana',
      },
    ]);
  }, []);

  return (
    <ContainerGeneral>
      <StepsMenu page={2} />
      <Title text="Escolha o tipo de massa que usaremos em sua pizza." />

      <ContainerMassas>
        {sizes.map((e) => (
          <Item key={e.id}>
            <p>{e.name}</p>
          </Item>
        ))}
      </ContainerMassas>
    </ContainerGeneral>
  );
};

export default Passo2;
