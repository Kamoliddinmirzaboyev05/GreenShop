import React from "react";
import "./Address.css";
import { Link } from "react-router-dom";
function Address() {
  return (
    <div className="addressPage">
      <div className="container">
        <div className="sidebar">
          <h2>My Account</h2>
          <ul>
            <li>
              <Link to={"/account"}>
                <i className="fas fa-user fa-bounce"></i>
                <p>Account Details</p>
              </Link>
            </li>
            <li>
              <Link className="active" to={"/address"}>
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
          <h2>Billing Address</h2>
          <p>
            The following addresses will be used on the checkout page by
            default.
          </p>
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
                  Country / Region<span> *</span>
                </p>
                <input type="text" />
              </div>
              <div className="formItem">
                <p>
                  Street Address<span> *</span>
                </p>
                <input type="text" />
              </div>
              <div className="formItem">
                <p>
                  State<span> *</span>
                </p>
                <input type="text" />
              </div>
              <div className="formItem">
                <p>
                  Email address<span> *</span>
                </p>
                <input type="text" />
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
                  Town / City<span> *</span>
                </p>
                <input type="text" />
              </div>
              <div className="formItem">
                <input className="appartment"
                  type="text"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                />
              </div>
              <div className="formItem">
                <p>
                  Zip<span> *</span>
                </p>
                <input type="text" />
              </div>
              <div className="formItem">
                <p>
                  Phone Number<span> *</span>
                </p>
                <input defaultValue={"+998"} type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
