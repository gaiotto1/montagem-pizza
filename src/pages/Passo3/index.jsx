/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect } from 'react';

import StepsMenu from '../../components/StepsMenu';

import { ContainerGeneral, Pizzas } from './styles';
import Title from '../../components/Title';

const Passo3 = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu([
      {
        id: 1,
        src: 'http://www.diadepizza.com.br/uploads/pizzas/alcatra-c-cheddar-1605571967.png',
        name: 'ALCATRA C/ CHEDDAR',
        desc: 'Molho de tomate, alcatra, mussarela, cheddar, azeitonas e orégano.',
      },
      {
        id: 2,
        src: 'http://www.diadepizza.com.br/uploads/pizzas/nome-aqui-1466684168.png',
        name: 'AMERICANA',
        desc: 'Molho de tomate, presunto, ovos, mussarela, bacon, orégano e azeitonas.',
      },
      {
        id: 3,
        src: 'http://www.diadepizza.com.br/uploads/pizzas/nome-aqui-1466684517.png',
        name: 'ATUM',
        desc: 'Molho de tomate, mussarela, atum, tomate, orégano e azeitonas ( cebola opcional)',
      },
      {
        id: 4,
        src: 'http://www.diadepizza.com.br/uploads/pizzas/nome-aqui-1466684610.png',
        name: 'BACON',
        desc: 'Molho de tomate, mussarela, bacon fatiado, orégano e azeitonas.',
      },
      {
        id: 5,
        src: 'http://www.diadepizza.com.br/uploads/pizzas/bacon-c-milho-1605572045.png',
        name: 'BACON C/ MILHO',
        desc: 'Molho de tomate, mussarela, milho, requeijão, bacon fatiado, azeitonas e orégano.',
      },
      {
        id: 6,
        src: 'http://www.diadepizza.com.br/uploads/pizzas/baiana-1605572190.png',
        name: 'BAIANA',
        desc: 'Molho apimentado de carne seca, mussarela, pimentão, cebola, pimenta, azeitonas e orégano.',
      },
    ]);
  }, []);

  return (
    <ContainerGeneral>
      <StepsMenu page={3} />
      <Title text="Agora é a hora mais legal! Escolha um de nossos recheios incríveis para a sua pizza." />

      <Pizzas>
        {menu.map((e) => (
          <div key={e.id}>
            <img alt={e.name} src={e.src} />
            <p>{e.name}</p>
            <p>{e.desc}</p>
          </div>
        ))}
      </Pizzas>
    </ContainerGeneral>
  );
};

export default Passo3;
