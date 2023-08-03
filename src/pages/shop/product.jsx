import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = ({ id, title, price, image }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div class="col">
      <div class="card shadow-sm">
        <img
          alt={title}
          class="bd-placeholder-img card-img-top p-4"
          src={image}
        />
        <div class="card-body">
          <p class="card-text">{title}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Buy
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                onClick={() => addToCart(id)}
              >
                Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
              </button>
            </div>
            <small class="text-body-secondary">${price}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
