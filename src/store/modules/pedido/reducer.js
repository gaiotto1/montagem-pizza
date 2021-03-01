import produce from 'immer';

const initialState = {
  pedido: {},
  menu: {
    passo1: true,
    passo2: false,
    passo3: false,
    obrigado: false,
  },
};

export default function pedido(state = initialState, action) {
  switch (action.type) {
    case '@cart/ADD_PEDIDO':
      return produce(state, (draft) => {
        const { dataPedido } = action;
        draft.pedido = dataPedido;
      });

    case '@cart/UPDATE_MENU':
      return produce(state, (draft) => {
        const { itensMenu } = action;
        draft.menu = itensMenu;
      });
    default:
      return state;
  }
}
