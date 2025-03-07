import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
function Checkout(
  totalShipping,
  totalDiscount,
  totalPrice,
  addCart,
  productDB,
  removeProduct,
  cartProducts,
  productCount,
) {
  return (
    <div className="checkoutPage">
      <div className="container">
        <p className="mainWay">
          <span>Home</span> / Shop / Checkout
        </p>
        <main>
          <div className="personalForm">
            <h2>Billing Address</h2>
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

                <div className="shipRadio">
                  <input type="radio" />
                  <p>Ship to a different address?</p>
                </div>
                <div className="orderNote">
                    <p>Order notes (optional)</p>
                    <textarea name="note" id="note"></textarea>
                </div>
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
                  <input
                    className="appartment"
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
          <div className="yourOrder">
            <h2 className="ordersMainTitle">Your order</h2>
            <div className="ordersTitle">
              <h3>Products</h3>
              <h3>Subtotal</h3>
            </div>
            <div className="orderItems">
              <div className="orderItem">
                <div className="itemImg">
                  <img src="/public/box1.1.png" alt="" />
                </div>
                <div className="itemText">
                  <h2>Barberton Daisy</h2>
                  <p>SKU: 1995751877966</p>
                </div>
                <div className="itemCount">
                  <p>(x 2)</p>
                </div>
                <div className="itemSubtotalPrice">
                  <h2>$238.00</h2>
                </div>
              </div>
              <div className="orderItem">
                <div className="itemImg">
                  <img src="/public/box1.1.png" alt="" />
                </div>
                <div className="itemText">
                  <h2>Barberton Daisy</h2>
                  <p>SKU: 1995751877966</p>
                </div>
                <div className="itemCount">
                  <p>(x 2)</p>
                </div>
                <div className="itemSubtotalPrice">
                  <h2>$238.00</h2>
                </div>
              </div>
              <div className="orderItem">
                <div className="itemImg">
                  <img src="/public/box1.1.png" alt="" />
                </div>
                <div className="itemText">
                  <h2>Barberton Daisy</h2>
                  <p>SKU: 1995751877966</p>
                </div>
                <div className="itemCount">
                  <p>(x 2)</p>
                </div>
                <div className="itemSubtotalPrice">
                  <h2>$238.00</h2>
                </div>
              </div>
            </div>
            <div className="coupon">
              <p>
                Have a coupon code? <Link>Click here</Link>
              </p>
            </div>
            <div className="calcTotal">
              <div className="row">
                <p>Subtotal</p>
                <p>$2,683.00</p>
              </div>
              <div className="row">
                <p>Coupon Discount</p>
                <p>(-) 00.00</p>
              </div>
              <div className="row">
                <p>Shiping</p>
                <p>$16.00</p>
              </div>
              <Link className="charge">View shipping charge</Link>
              <div className="totalPrice">
                <h2>Total</h2>
                <h2>$2,699.00</h2>
              </div>
            </div>
            <div className="paymentMethod">
              <h2>Payment Method</h2>
              <div className="paymentTypes">
                <div className="paymentType">
                  <input name="paymentType" type="radio" />
                  <div className="paymentBrendImgs">
                    <img src="/public/payment.svg" alt="" />
                  </div>
                </div>
                <div className="paymentType">
                  <input name="paymentType" type="radio" />
                  <p>Dorect bank transfer</p>
                </div>
                <div className="paymentType">
                  <input name="paymentType" type="radio" />
                  <p>Cash on delivery</p>
                </div>
              </div>
              <button className="placeOrderBtn">Place Order</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Checkout;
