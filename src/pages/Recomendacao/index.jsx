import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { ContainerGeneral, ContainerPizza, Button } from './styles';

import StepsMenu from '../../components/StepsMenu';
import Title from '../../components/Title';
import Description from '../../components/Description';

const Recomendacao = () => {
  const [recomendacao, setRecomendacao] = useState(null);

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

  useEffect(() => {
    addRecomendacao();
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

      <Button>Confirmar Pedido</Button>
    </ContainerGeneral>
  );
};

export default Recomendacao;
