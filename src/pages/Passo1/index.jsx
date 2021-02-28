import React, { useState, useEffect } from 'react';

import StepsMenu from '../../components/StepsMenu';

import { ContainerGeneral, Sizes } from './styles';
import Title from '../../components/Title';

const Passo1 = () => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    setSizes([
      {
        id: 1,
        name: 'P',
      },
      {
        id: 2,
        name: 'M',
      },
      {
        id: 3,
        name: 'G',
      },
    ]);
  }, []);

  return (
    <ContainerGeneral>
      <StepsMenu page={1} />
      <Title text="Escolha o tamanho da sua pizza." />

      <Sizes>
        {sizes.map((e) => (
          <button key={e.id} type="button">
            <p>{e.name}</p>
          </button>
        ))}
      </Sizes>
    </ContainerGeneral>
  );
};

export default Passo1;
