import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
function Account() {
  return (
    <div className="accountPage">
      <div className="container">
        <div className="sidebar">
          <h2>My Account</h2>
          <ul>
            <li>
              <Link className="active" to={"/account"}>
                <i className="fas fa-user fa-bounce"></i>
                <p>Account Details</p>
              </Link>
            </li>
            <li>
              <Link to={"/address"}>
                <i className="fas fa-location-dot fa-beat"></i>
                <p>Address</p>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fas fa-shopping-cart fa-beat"></i>
                <p>Orders</p>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-regular  fa-heart fa-beat"></i>
                <p>Wishlist</p>
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa-brands fa-facebook-messenger fa-beat"></i>
                <p>Reports</p>
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa-solid fa-download fa-bounce"></i>
                <p>Downloads</p>
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa-solid fa-triangle-exclamation fa-flip"></i>
                <p>Support</p>
              </Link>
            </li>
            <li>
              <Link className="active logoutItem">
                <i class="fa-solid fa-right-from-bracket fa-beat-fade"></i>
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="personalForm">
          <h2>Personal Information</h2>
          <div className="forms">
            <form action="#">
              <div className="formItem">
                <p>
                  First Name <span> *</span>
                </p>
                <input type="text" />
              </div>
              <div className="formItem">
                <p>
                  Email address<span> *</span>
                </p>
                <input type="text" />
              </div>
              <div className="formItem">
                <p>
                  Username<span> *</span>
                </p>
                <input type="text" />
              </div>
              <p className="passwordChange">Password change</p>
              <div className="formItem">
                <p>
                  Current password<span> *</span>
                </p>
                <input type="text" />
                <div className="noseePassword">
                  <img src="/public/nosee.svg" alt="" />
                </div>
              </div>
              <div className="formItem">
                <p>
                  New password<span> *</span>
                </p>
                <input type="text" />
                <div className="noseePassword">
                  <img src="/public/nosee.svg" alt="" />
                </div>
              </div>
              <div className="formItem">
                <p>
                  Confirm new password<span> *</span>
                </p>
                <input type="text" />
                <div className="noseePassword">
                  <img src="/public/nosee.svg" alt="" />
                </div>
              </div>
              <button>Save Changes</button>
            </form>
            <form action="#">
              <div className="formItem">
                <p>
                  Last Name<span> *</span>
                </p>
                <input type="text" />
              </div>
              <div className="formItem">
                <p>
                  Phone Number<span> *</span>
                </p>
                <input defaultValue={"+998"} type="text" />
              </div>
              <div className="photoChange">
                <p>Photo</p>
                <div className="changeBtns">
                  <div className="imgIcon">
                    <img src="/public/img.svg" alt="" />
                  </div>
                  <button>Change</button>
                  <button className="removeBtn">Remove</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
