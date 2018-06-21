import { h } from 'hyperapp';

export default ({
  id,
  name,
  description,
  imgUrl,
  addToCart,
}) =>
  <div class="card">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal">{name}</h4>
    </div>
    <img class="card-img-top" src={imgUrl} alt="Card image cap" />
    <div class="card-body">
      <p class="card-text">{description}</p>
    </div>
    <div class="card-footer">
      <button
        type="button"
        class="btn btn-lg btn-block btn-primary"
        onclick={() => addToCart(id)}
      >
        Add to Cart
      </button>
    </div>
  </div>;
