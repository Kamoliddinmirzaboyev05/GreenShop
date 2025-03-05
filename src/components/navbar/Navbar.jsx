import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({ cartProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(true);

  return (
    <div className="navbarPage">
      <nav>
        <div className="container">
          <Link to={"/"}>
            <div className="logo">
              <img src="/logo.svg" alt="" />
            </div>
          </Link>
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

            <Link to={"/cart"}>
              <span className="cartIcon">
                <div className="cartCount">
                  <p>{cartProducts.length}</p>
                </div>
                <i className="fa fa-shopping-cart"></i>
              </span>
            </Link>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <img src="/Logout.svg" alt="" />
              <p>Login</p>
            </button>
            <Link to={"/account"}>
              <button>
                <i className="fas fa-user"></i>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className={isOpen ? "register" : " register hidden"}>
        <div className={isOpenLogin ? "loginPage" : " hiddenModal"}>
          <form action="#">
            <div
              className="closeModal"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <img src="/x.svg" alt="" />
            </div>
            <div className="formlinks">
              <Link>Login </Link>
              <p>|</p>
              <Link
                onClick={() => {
                  setIsOpenLogin(false);
                }}
              >
                Register
              </Link>
            </div>
            <p className="logininfo">
              Enter your username and password to login.
            </p>
            <div className="loginInput">
              <input type="text" placeholder="almamun_uxui@outlook.com" />
            </div>
            <div className="passInput">
              <input type="password" placeholder="*******" />
              <img src="/nosee.svg" alt="" />
            </div>
            <p className="forgot">Forgot Password?</p>
            <button className="loginBtn">Login</button>
            <div className="elseWay">
              <span></span>
              <p>Or login with</p>
              <span></span>
            </div>
            <div className="orWay">
              <img src="/google.svg" alt="" />
              <p>Login with Google</p>
            </div>
            <div className="orWay">
              <img src="/facebook.svg" alt="" />
              <p>Login with Facebook</p>
            </div>
          </form>
        </div>
        <div
          className={
            isOpenLogin ? "hiddenModal registerPage loginPage" : "registerPage "
          }
        >
          <form action="#">
            <div
              className="closeModal"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <img src="/x.svg" alt="" />
            </div>
            <div className="formlinks">
              <Link
                onClick={() => {
                  setIsOpenLogin(true);
                }}
              >
                Login{" "}
              </Link>
              <p>|</p>
              <Link>Register</Link>
            </div>
            <p className="logininfo">
              Enter your email and password to register.
            </p>
            <div className="loginInput">
              <input type="text" placeholder="Username" />
            </div>
            <div className="passInput">
              <input type="password" placeholder="Enter your email address" />
            </div>
            <div className="passInput">
              <input type="password" placeholder="Password" />
              <img src="/nosee.svg" alt="" />
            </div>
            <div className="loginInput">
              <input type="text" placeholder="Confirm Password" />
            </div>
            <p className="forgot">Forgot Password?</p>
            <button className="loginBtn">Login</button>
            <div className="elseWay">
              <span></span>
              <p>Or login with</p>
              <span></span>
            </div>
            <div className="orWay">
              <img src="/google.svg" alt="" />
              <p>Login with Google</p>
            </div>
            <div className="orWay">
              <img src="/facebook.svg" alt="" />
              <p>Login with Facebook</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
