
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaSearch,
  FaShoppingCart,
  FaPlus,
  FaFilter,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { filterByPrice, searchByName } from "../Services/Actions/filterActions";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { logoutAsync } from "../Services/Actions/authActions";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      dispatch(filterByPrice([]));
    } else {
      const range = value.includes("+")
        ? [2000, Infinity]
        : value.split("-").map(Number);
      dispatch(filterByPrice(range));
    }
  };

  const handleCart = () => {
    if (!user) {
      toast.error("You must be signed in to view your cart.");
      setTimeout(() => navigate("/signin"), 1500);
    } else {
      navigate("/cart");
    }
  };

  const handleSearch = (e) => {
    dispatch(searchByName(e.target.value));
  };

  const handleAddProduct = () => {
    if (!user) {
      toast.warning("Please sign in to add a product.");
      return navigate("/signin");
    }
    navigate("/add-product");
  };

  const handleLogout = async () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (!confirmed) return;

    try {
      await signOut(auth);
      dispatch(logoutAsync());
      toast.success("Signed out successfully");
      navigate("/signin");
    } catch (error) {
      toast.error("Failed to sign out.");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg minimal-navbar shadow-sm py-2">
      <div className="container-fluid align-items-center">
        <a className="navbar-brand fw-bold minimal-navbar-brand me-4" href="/">
             <h4 className="color-text-1">Click & <br /> Collect</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="row w-100 g-2 align-items-center justify-content-end">

            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control minimal-search-input ps-5"
                  placeholder="Search for products"
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="col-md-3 col-lg-2 d-flex align-items-center">
              <FaFilter className="me-2 text-muted" />
              <select className="form-select minimal-select" onChange={handlePriceChange}>
                <option value="">All</option>
                <option value="0-500">Under ₹500</option>
                <option value="500-1000">₹500 - ₹1000</option>
                <option value="1000-1500">₹1000 - ₹1500</option>
                <option value="1500-2000">₹1500 - ₹2000</option>
                <option value="2000+">Above ₹2000</option>
              </select>
            </div>
            <div className="col-auto">
              <div
                className="position-relative px-3 py-2 "
                onClick={handleCart}
                style={{ cursor: "pointer" }}
              >
                <FaShoppingCart className="fs-5 me-1 color-text-1" />
                <span className="d-none d-lg-inline color-text-1">Cart</span>
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>

            <div className="col-auto">
              <div className="dropdown">
                {user ? (
                  <>
                    <button
                      className="btn minimal-btn dropdown-toggle px-3 py-2 d-flex align-items-center"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      <FaUserCircle className="me-1" />
                      <span className="d-none d-lg-inline">{user.email.split("@")[0]}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><button className="dropdown-item" onClick={() => navigate("/profile")}>Profile</button></li>
                      <li><button className="dropdown-item" onClick={() => navigate("/orders")}>Orders</button></li>
                      <li><button className="dropdown-item" onClick={() => navigate("/coupons")}>Coupons</button></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <button className="dropdown-item text-danger" onClick={handleLogout}>
                          <FaSignOutAlt /> Sign Out
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <button
                    className="btn minimal-btn px-3 py-2"
                    onClick={() => navigate("/signin")}
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
