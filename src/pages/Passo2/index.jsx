import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import StepsMenu from '../../components/StepsMenu';

import { ContainerGeneral, ContainerMassas, Item } from './styles';
import Title from '../../components/Title';

const Passo2 = () => {
  const [massas, setMassas] = useState([]);

  async function getMassas() {
    try {
      const responseMassas = await api.get('massas');

      if (responseMassas.data) {
        setMassas(responseMassas.data);
      }
    } catch (error) {
      toast.error('Falha ao buscar os dados.');
    }
  }

  useEffect(() => {
    getMassas();
  }, []);

  return (
    <ContainerGeneral>
      <StepsMenu page={2} />
      <Title text="Escolha o tipo de massa que usaremos em sua pizza." />

      <ContainerMassas>
        {massas.map((e) => (
          <Item key={e.id}>
            <p>{e.name}</p>
          </Item>
        ))}
      </ContainerMassas>
    </ContainerGeneral>
  );
};

export default Passo2;
