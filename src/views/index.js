import { h } from 'hyperapp';
import Header from './Header';
import ProductItem from './ProductItem';

export default ({ productList, cart }, { addToCart }) => (
  <div>
    <Header cart={cart} />
    <div class="container">
      <div class="card-deck">
        {
          productList.map(({
            id,
            name,
            description,
            imgUrl,
          }) => (
              <ProductItem
                id={id}
                name={name}
                description={description}
                imgUrl={imgUrl}
                addToCart={addToCart}
              />
            ))
        }
      </div>
    </div>
  </div>
);
