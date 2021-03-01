export default function updatePedido(dataPedido) {
  return {
    type: '@cart/ADD_PEDIDO',
    dataPedido,
  };
}
