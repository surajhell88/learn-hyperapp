export default {
  addToCart: id => ({ cart, productList }) => {
    const cartItems = [...cart];
    if (cartItems.indexOf(id) === -1) {
      cartItems.push(id);
    }
    return {
      cart: cartItems,
      productList: productList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            inCartCount: item.inCartCount + 1,
          };
        }
        return item;
      }),
    };
  },
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
