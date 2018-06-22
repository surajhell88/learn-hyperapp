import { h } from 'hyperapp';

import Header from './Header';
import HomeRoute from '../routes/Home';
import CartRoute from '../routes/Cart';

export default ({ productList, cart }, { addToCart, removeFromCart }) => (
  <div>
    <Header cart={cart} />
    <div class="container">
      <HomeRoute productList={productList} addToCart={addToCart} />
      <CartRoute cart={cart} productList={productList} removeFromCart={removeFromCart} />
    </div>
  </div>
);
