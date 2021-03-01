export function updatePedido(dataPedido) {
  return {
    type: '@cart/ADD_PEDIDO',
    dataPedido,
  };
}

export function updateMenu(itensMenu) {
  return {
    type: '@cart/UPDATE_MENU',
    itensMenu,
  };
}
