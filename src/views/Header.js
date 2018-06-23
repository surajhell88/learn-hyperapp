import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';

export default ({ cart }) =>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 class="my-0 mr-md-auto font-weight-normal">
      <Link class="p-2 text-dark" to="/">Shopping Cart</Link>
    </h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <Link class="p-2 text-dark" to="/cart">
        Show cart {cart.length > 0 && `(${cart.length})`}
      </Link>
    </nav>
  </div>;
