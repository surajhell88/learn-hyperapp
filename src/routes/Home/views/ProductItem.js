import { h } from 'hyperapp';

export default ({
  id,
  name,
  description,
  imgUrl,
  addToCart,
  quantity,
  inCartCount,
}) =>
  <div class="card">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal">{name}</h4>
    </div>
    <img class="card-img-top" src={imgUrl} alt="Card image cap" />
    <div class="card-body">
      <p class="card-text">{description}</p>
      <p class="card-text">
        <small class="text-muted">
          {(quantity - inCartCount) === 0 ? 'No Items Left' : `Items Left: ${(quantity - inCartCount)}`}
        </small>
      </p>
    </div>
    <div class="card-footer">
      <button
        type="button"
        class="btn btn-lg btn-block btn-primary"
        onclick={() => addToCart(id)}
        disabled={(quantity - inCartCount) === 0}
      >
        Add to Cart
      </button>
    </div>
  </div>;
