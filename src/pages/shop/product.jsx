import { ShopContext } from "../../context/shop-context";

const Product = ({ title, price, image }) => {
  return (
    <div class="col">
      <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top p-4" src={image} />
        <div class="card-body">
          <p class="card-text">{title}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Buy
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Add to Cart
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
