import { h } from 'hyperapp';

export default ({ cart }) =>
  <div>
    <h1>Cart</h1>
    <p class="card-text"><small class="text-muted">Total Items in Cart: {cart.length}</small></p>
  </div>;
