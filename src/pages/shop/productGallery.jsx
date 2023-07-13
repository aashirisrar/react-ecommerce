import { PRODUCTS } from "../../products";
import Product from "./product";

const ProductGallery = () => {
  return (
    <div>
      <div class="album py-3 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {PRODUCTS.map((prod) => {
              return (
                <Product
                  id={prod.id}
                  title={prod.productName}
                  price={prod.price}
                  image={prod.image}
                  key={prod.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
