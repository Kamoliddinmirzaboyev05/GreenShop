import React, { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
function Checkout({
  cartProducts,
  totalPrice,
  couponDiscount,
  totalDiscount,
  totalShipping,
}) {
  const [showOrderModal, setShowOrderModal] = useState(false);
  return (
    <div className="page">
      <div className="checkoutPage">
        <div
          className={
            showOrderModal
              ? "orderModalBack activeOrderModal"
              : "orderModalBack"
          }
        >
          <div className="orderModal">
            <span className="closeOrderModal">
              <i className="fas fa-x"></i>
            </span>
            <div className="modalHead">
              <div className="modalHero">
                <div className="modalImg">
                  <img src="/public/orderthank.png" alt="" />
                </div>
                <p>Your order has been received</p>
              </div>
            </div>
            <div className="modalData">
              <div className="modalMainData">
                <div className="modalDataItem">
                  <p className="key">Order Number </p>
                  <p className="value">19586687</p>
                </div>
                <div className="modalDataItem">
                  <p className="key">Date</p>
                  <p className="value">15 Sep, 2021</p>
                </div>
                <div className="modalDataItem">
                  <p className="key">Total</p>
                  <p className="value">2,699.00</p>
                </div>
                <div className="modalDataItem">
                  <p className="key">Payment Method</p>
                  <p className="value">Cash on delivery</p>
                </div>
              </div>
              <h3 className="modalDatTitle">Order Details</h3>
              <div className="orderDetails">
                <div className="orderDetailsNav">
                  <p>Products</p>
                  <p>Qty</p>
                  <p>Subtotal</p>
                </div>
                <div className="orderDetailsItems">
                  {cartProducts.map((item) => {
                    return (
                      <div className="orderItem">
                        <div className="itemImg">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="itemText">
                          <h2>{item.title}</h2>
                          <p>SKU: 1995751877966</p>
                        </div>
                        <div className="itemCount">
                          <p>(x {item.amount})</p>
                        </div>
                        <div className="itemSubtotalPrice">
                          <h2>${item.price * item.amount}.00</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  <p>Shiping</p>
                  <p>$16.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <input required type="text" />
                  </div>
                  <div className="formItem">
                    <p>
                      Country / Region<span> *</span>
                    </p>
                    <input required type="text" />
                  </div>
                  <div className="formItem">
                    <p>
                      Street Address<span> *</span>
                    </p>
                    <input required type="text" />
                  </div>
                  <div className="formItem">
                    <p>
                      State<span> *</span>
                    </p>
                    <input required type="text" />
                  </div>
                  <div className="formItem">
                    <p>
                      Email address<span> *</span>
                    </p>
                    <input required type="text" />
                  </div>

                  <div className="shipRadio">
                    <input required type="radio" />
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
                    <input required type="text" />
                  </div>

                  <div className="formItem">
                    <p>
                      Town / City<span> *</span>
                    </p>
                    <input required type="text" />
                  </div>
                  <div className="formItem">
                    <input
                      required
                      className="appartment"
                      type="text"
                      placeholder="Appartment, suite, unit, etc. (optional)"
                    />
                  </div>
                  <div className="formItem">
                    <p>
                      Zip<span> *</span>
                    </p>
                    <input required type="text" />
                  </div>
                  <div className="formItem">
                    <p>
                      Phone Number<span> *</span>
                    </p>
                    <input required defaultValue={"+998"} type="text" />
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
                {cartProducts.map((item) => {
                  return (
                    <div className="orderItem">
                      <div className="itemImg">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="itemText">
                        <h2>{item.title}</h2>
                        <p>SKU: 1995751877966</p>
                      </div>
                      <div className="itemCount">
                        <p>(x {item.amount})</p>
                      </div>
                      <div className="itemSubtotalPrice">
                        <h2>${item.price * item.amount}.00</h2>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="coupon">
                <p>
                  Have a coupon code? <Link to={"/cart"}>Click here</Link>
                </p>
              </div>
              <div className="calcTotal">
                <div className="row">
                  <p>Subtotal</p>
                  <p className="bolderValue">$ {totalPrice}.00</p>
                </div>
                <div className="row">
                  <p>Product Discount</p>
                  <p>(-) {totalDiscount.toFixed(2)} $</p>
                </div>
                <div className="row">
                  <p>Coupon Discount</p>
                  <p>(-) {couponDiscount} %</p>
                </div>
                <div className="row shipping">
                  <p>Shipping</p>
                  <p className="bolderValue">${totalShipping}.00</p>
                </div>
                <div className="row">
                  <p className="totalPriceKey">Total</p>
                  <div className="totalPrices">
                    <p className="totalPrice">
                      $
                      {((totalPrice + totalShipping) * (100 - couponDiscount)) /
                        100}
                      .00
                    </p>
                    {couponDiscount > 0 && (
                      <p className="disabledTotalPrice">
                        ${totalPrice + totalShipping}.00
                      </p>
                    )}
                  </div>
                </div>
                <Link className="charge">View shipping charge</Link>
                <div className="totalBasicPrice">
                  <h2>Total</h2>
                  <div className="totalPrices">
                    <p className="totalPrice">
                      $
                      {((totalPrice + totalShipping) * (100 - couponDiscount)) /
                        100}
                      .00
                    </p>
                    {couponDiscount > 0 && (
                      <p className="disabledTotalPrice">
                        ${totalPrice + totalShipping}.00
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="paymentMethod">
                <h2>Payment Method</h2>
                <div className="paymentTypes">
                  <div className="paymentType">
                    <input
                      name="paymentType"
                      id="payme"
                      type="radio"
                      defaultChecked
                    />
                    <div className="paymentBrendImgs">
                      <label for="payme">
                        <img src="/public/payment.svg" alt="" />
                      </label>
                    </div>
                  </div>
                  <div className="paymentType">
                    <input name="paymentType" id="dorect" type="radio" />
                    <label for="dorect">Dorect bank transfer</label>
                  </div>
                  <div className="paymentType">
                    <input name="paymentType" id="ondelivery" type="radio" />
                    <label for="ondelivery">Cash on delivery</label>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowOrderModal(true);
                  }}
                  className="placeOrderBtn"
                >
                  Place Order
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
