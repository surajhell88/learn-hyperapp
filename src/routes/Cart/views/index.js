import { h } from 'hyperapp';

export default ({ cart, productList, removeFromCart }) =>
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
          <li class="list-group-item list-group-item-action d-flex align-items-center">
            <span class="badge badge-primary badge-pill mr-2">
              {product.inCartCount}
            </span>
            <span class="flex-fill">
              {product.name}
            </span>
            <button
              type="button"
              class="close"
              aria-label="Close"
              onclick={(e) => {
                e.stopPropagation();
                removeFromCart(product.id);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </li>)
      }
    </ul>
  </div>;
