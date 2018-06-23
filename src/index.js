import { app } from 'hyperapp';
import { location } from '@hyperapp/router';

import state from './state';
import actions from './actions';
import view from './views';

const main = app(
  {
    ...state,
    location: location.state,
  },
  {
    ...actions,
    location: location.actions,
  },
  view,
  document.body,
);

const unsubscribe = location.subscribe(main.location); // eslint-disable-line no-unused-vars
