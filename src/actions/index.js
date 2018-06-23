export default {
  addToCart: id => ({ cart, productList }) => ({
    cart: cart.indexOf(id) === -1 ? [...cart, id] : [...cart],
    productList: productList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          inCartCount: item.inCartCount + 1,
        };
      }
      return item;
    }),
  }),
  removeFromCart: id => ({ cart, productList }) => ({
    cart: cart.filter(itemID => itemID !== id),
    productList: productList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          inCartCount: 0,
        };
      }
      return item;
    }),
  }),
};
