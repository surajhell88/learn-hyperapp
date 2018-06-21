export default {
  addToCart: id => ({ cart }) => ({
    cart: [...cart, id],
  }),
};
