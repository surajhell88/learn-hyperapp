import { h } from 'hyperapp';

import ProductItem from './ProductItem';

export default ({ productList: list, addToCart: add }) =>
  <div class="card-deck">
    {
      list.map(item => <ProductItem {...item} addToCart={add} />)
    }
  </div>;
