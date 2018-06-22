import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';

import Header from './Header';
import Home from './Home';
import Cart from './Cart';

export default ({ productList, cart }, { addToCart, removeFromCart }) => (
  <div>
    <Header cart={cart} />
    <div class="container">
      <Route
        path="/"
        render={
          () => <Home productList={productList} addToCart={addToCart} />
        }
      />
      <Route
        path="/cart"
        render={
          () => <Cart cart={cart} productList={productList} removeFromCart={removeFromCart} />
        }
      />
    </div>
  </div>
);
