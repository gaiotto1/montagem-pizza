import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import updatePedido from '../../store/modules/pedido/actions';
import api from '../../services/api';

import { ContainerGeneral, ContainerPizza, Button } from './styles';

import StepsMenu from '../../components/StepsMenu';
import Title from '../../components/Title';
import Description from '../../components/Description';

const Recomendacao = () => {
  const history = useHistory();
  const [recomendacao, setRecomendacao] = useState(null);
  const dispatch = useDispatch();

  async function addRecomendacao() {
    let massa = null;
    let tamanho = null;
    let recheio = null;

    try {
      const responseRecomendacao = await api.get('recomendacao');

      if (responseRecomendacao.data) {
        const {
          tamanhoId, massaId, recheioId, pontos,
        } = responseRecomendacao.data;

        const responseTamanho = await api.get(`tamanhos/${tamanhoId}`);
        if (responseTamanho.data) {
          tamanho = responseTamanho.data;
        }

        const responseMassa = await api.get(`massas/${massaId}`);
        if (responseMassa.data) {
          massa = responseMassa.data;
        }

        const responseRecheios = await api.get(`recheios/${recheioId}`);
        if (responseRecheios.data) {
          recheio = responseRecheios.data;
        }

        setRecomendacao({
          tamanho,
          massa,
          recheio,
          pontos,
        });
      }
    } catch (error) {
      toast.error('Falha ao buscar os dados.');
    }
  }

  async function confirm() {
    try {
      dispatch(updatePedido({
        tamanho: recomendacao.tamanho,
        massa: recomendacao.massa,
        recheio: recomendacao.recheio,
      }));

      toast.success('Pedido salvo com sucesso');

      const response = await api.get('validaPontos');

      const { recebePontos, pontos } = response.data;

      if (response.data && recebePontos) {
        toast.success(`Parabéns, você recebeu ${pontos} ponto(s) para utilizar em seu próximo pedido.`);
      }
      setTimeout(() => {
        history.push('/obrigado');
      }, 4000);
    } catch {
      toast.error('Falha ao salvar o pedido.');
    }
  }

  useEffect(() => {
    addRecomendacao();
    dispatch(updatePedido({}));
  }, []);

  return (
    <ContainerGeneral>
      <StepsMenu page={0} />

      <Title text="A recomendação do dia é:" />

      <Description
        name={`${recomendacao?.recheio.name} - ${recomendacao?.tamanho.name}`}
        desc={`Ingredientes: ${recomendacao?.recheio.desc}`}
      />

      <ContainerPizza>
        <img src={recomendacao?.recheio.src} alt={recomendacao?.recheio.name} />
      </ContainerPizza>

      <Button onClick={() => { confirm(); }}>Pedir a pizza do dia</Button>
    </ContainerGeneral>
  );
};

export default Recomendacao;
