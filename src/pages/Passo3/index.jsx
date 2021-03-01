/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as ActionPedido from '../../store/modules/pedido/actions';
import api from '../../services/api';

import StepsMenu from '../../components/StepsMenu';

import { ContainerGeneral, Pizzas } from './styles';
import Title from '../../components/Title';

const Passo3 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pedido } = useSelector((state) => state.pedido);
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

  function setRecheio(recheio) {
    dispatch(ActionPedido.updatePedido({
      ...pedido,
      recheio,
    }));
    history.push('/obrigado');
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
          <button key={e.id} type="button" onClick={() => { setRecheio(e); }}>
            <img alt={e.name} src={e.src} />
            <p>{e.name}</p>
            <p>{e.desc}</p>
          </button>
        ))}
      </Pizzas>
    </ContainerGeneral>
  );
};

export default Passo3;
