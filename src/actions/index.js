export default {
  addToCart: id => ({ cart, productList }) => ({
    cart: [...cart, id],
    productList: productList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    }),
  }),
};
