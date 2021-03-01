import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as ActionPedido from '../../store/modules/pedido/actions';
import api from '../../services/api';

import StepsMenu from '../../components/StepsMenu';

import { ContainerGeneral, Sizes } from './styles';
import Title from '../../components/Title';

const Passo1 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pedido } = useSelector((state) => state.pedido);
  const [sizes, setSizes] = useState([]);

  async function getTamanhos() {
    try {
      const responseTamanhos = await api.get('tamanhos');

      if (responseTamanhos.data) {
        setSizes(responseTamanhos.data);
      }
    } catch (error) {
      toast.error('Falha ao buscar os dados.');
    }
  }

  function setTamanho(tamanho) {
    dispatch(ActionPedido.updatePedido({
      ...pedido,
      tamanho,
    }));
    dispatch(ActionPedido.updateMenu(
      {
        passo1: true,
        passo2: true,
        passo3: false,
        obrigado: true,
      },
    ));
    history.push('/passo2');
  }

  useEffect(() => {
    getTamanhos();
  }, []);

  return (
    <ContainerGeneral>
      <StepsMenu page={1} />
      <Title text="Escolha o tamanho da sua pizza." />

      <Sizes>
        {sizes.map((e) => (
          <button key={e.id} type="button" onClick={() => setTamanho(e)}>
            <p>{e.name}</p>
          </button>
        ))}
      </Sizes>
    </ContainerGeneral>
  );
};

export default Passo1;
