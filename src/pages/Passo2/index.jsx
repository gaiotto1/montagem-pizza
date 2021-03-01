import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as ActionPedido from '../../store/modules/pedido/actions';
import api from '../../services/api';

import StepsMenu from '../../components/StepsMenu';

import { ContainerGeneral, ContainerMassas, Item } from './styles';
import Title from '../../components/Title';

const Passo2 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pedido } = useSelector((state) => state.pedido);
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

  function setMassa(massa) {
    dispatch(ActionPedido.updatePedido({
      ...pedido,
      massa,
    }));
    dispatch(ActionPedido.updateMenu(
      {
        passo1: true,
        passo2: true,
        passo3: true,
        obrigado: true,
      },
    ));
    history.push('/passo3');
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
          <Item key={e.id} onClick={() => { setMassa(e); }}>
            <p>{e.name}</p>
          </Item>
        ))}
      </ContainerMassas>
    </ContainerGeneral>
  );
};

export default Passo2;
