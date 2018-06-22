import { h } from 'hyperapp';

export default ({ cart, productList }) =>
  <div>
    <h1>Cart</h1>
    <p class="card-text">
      <small class="text-muted">
        Total Items in Cart: {cart.length}
      </small>
    </p>
    <ul class="list-group">
      {productList
        .filter(item => cart.indexOf(item.id) !== -1)
        .map(product =>
          <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            {product.description}
            <span class="badge badge-primary badge-pill">{product.inCartCount}</span>
          </li>)
      }
    </ul>
  </div>;
