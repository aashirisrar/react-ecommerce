const Product = ({ title, price, image }) => {
  return (
    <div>
      <p>{title}</p>
      <p>${price}</p>
    </div>
  );
};

export default Product;
