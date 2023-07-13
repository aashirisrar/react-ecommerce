import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart, ShoppingBagOpen } from "phosphor-react";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Fifth navbar example"
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <ShoppingBagOpen size={28} /> Ecommerce App
          </Link>
          <div class="collapse navbar-collapse" id="navbarsExample05">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  <ShoppingBag size={22} /> Shop
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/cart">
                  <ShoppingCart size={22} /> Cart
                </Link>
              </li>
            </ul>
            <form role="search">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
