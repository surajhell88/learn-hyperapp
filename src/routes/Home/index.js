import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';

import HomeView from './views';

export default props =>
  <Route
    path="/"
    render={
      () => <HomeView {...props} />
    }
  />;
