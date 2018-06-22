import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';

import CartView from './views';

export default props =>
  <Route
    path="/cart"
    render={
      () => <CartView {...props} />
    }
  />;
