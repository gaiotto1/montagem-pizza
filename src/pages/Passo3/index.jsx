/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import StepsMenu from '../../components/StepsMenu';

import { ContainerGeneral, Pizzas } from './styles';
import Title from '../../components/Title';

const Passo3 = () => {
  const [menu, setMenu] = useState([]);

  async function getRecheios() {
    try {
      const responseRecheios = await api.get('recheios');

      if (responseRecheios.data) {
        setMenu(responseRecheios.data);
      }
    } catch (error) {
      toast.error('Falha ao buscar os dados.');
    }
  }

  useEffect(() => {
    getRecheios();
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
