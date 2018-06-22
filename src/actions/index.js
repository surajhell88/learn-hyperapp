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
            quantity: item.quantity - 1,
            inCartCount: item.inCartCount + 1,
          };
        }
        return item;
      }),
    };
  },
};
