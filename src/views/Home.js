import { h } from 'hyperapp';
import ProductItem from './ProductItem';

export default ({ productList, addToCart }) =>
  <div class="card-deck">
    {
      productList.map(({
        id,
        name,
        description,
        imgUrl,
        quantity,
      }) => (
          <ProductItem
            id={id}
            name={name}
            description={description}
            imgUrl={imgUrl}
            addToCart={addToCart}
            quantity={quantity}
          />
        ))
    }
  </div>;
