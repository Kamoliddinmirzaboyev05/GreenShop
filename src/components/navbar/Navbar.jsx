import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarPage">
      <nav>
        <div className="container">
          <div className="logo">
            <img src="/public/logo.svg" alt="" />
          </div>
          <ul className="links">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/product"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"/plantcare"}>Plant Care</NavLink>
            </li>
            <li>
              <NavLink to={"/blogs"}>Blogs</NavLink>
            </li>
          </ul>
          <div className="navBtns">
            <i className="fas fa-search"></i>
            <i className="fa fa-shopping-cart"></i>
            <button className="loginBtn">
              <img src="/public/Logout.svg" alt="" />
              <p>Login</p>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
