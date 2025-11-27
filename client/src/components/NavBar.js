import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon, FaUser, FaShoppingCart } from "react-icons/fa"; 

function NavBar() {
  const { theme, toogleTheme } = useTheme();
  let cart = JSON.parse(localStorage.getItem("cart")) || []  
  let [cartCount, setCartCount] = useState(cart.length) 
  
  return (
    <nav className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-light shadow-sm border-bottom" : "navbar-dark bg-dark border-bottom"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fs-4 fw-bold" to="/">Sri Sounds & Event Management</Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link px-3 active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-nowrap" to="/addProduct">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-nowrap" to="/productList">Product List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-nowrap" to="/book">Book Now</Link>
            </li>
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
              <button className="btn btn-outline-secondary border border-1 rounded-circle" onClick={toogleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-primary border-0 mx-2 rounded-circle text-nowrap" to="/login"><FaUser /></Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-primary border-0 text-nowrap fs-5 " to="/cart">
                  <FaShoppingCart />
                  <span className=" badge bg-danger rounded rounded-circle">{cartCount}</span>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
