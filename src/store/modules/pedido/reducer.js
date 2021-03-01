import produce from 'immer';

const initialState = {
  pedido: {},
};

export default function pedido(state = initialState, action) {
  switch (action.type) {
    case '@cart/ADD_PEDIDO':
      return produce(state, (draft) => {
        const { dataPedido } = action;
        draft.pedido = dataPedido;
      });
    default:
      return state;
  }
}
