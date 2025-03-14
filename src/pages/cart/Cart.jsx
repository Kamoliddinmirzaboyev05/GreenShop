import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "../../components/productcard/ProductCard";

function Cart({
  totalShipping,
  totalDiscount,
  totalPrice,
  addCart,
  productDB,
  removeProduct,
  cartProducts,
  productCount,
  couponDiscount,
  checkCoupon,
  couponCode,
}) {
  localStorage.setItem("couponDiscount", couponDiscount);
  const [coupon, setCoupon] = useState();
  const [inputValue, setInputValue] = useState(coupon);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="cartPage">
      <div className="cartHero">
        <div className="container">
          <div className="way">
            <p>
              <span>Home</span> / Shop /Shopping Cart
            </p>
          </div>
          <div className="cartProducts">
            <div className="productQuantity">
              <div className="productQuantityTitle">
                <div className="maintTitle">
                  <p>Products</p>
                </div>
                <div className="valueTitle">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                </div>
              </div>
              <div className="products">
                {cartProducts.map((item) => {
                  return (
                    <Link to={`/product/${item.id}`}>
                      <div className="productData">
                        <div className="productNameImg">
                          <div className="productDataImg">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="prooductDataText">
                            <h2>{item.title}</h2>
                            <p>SKU: 1995751877966</p>
                          </div>
                        </div>
                        <p className="itemPrice">$ {item.price}.00</p>
                        <div className="productCounter">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              productCount(item.id, "minus");
                            }}
                          >
                            -
                          </button>
                          <p className="countValue">{item.amount}</p>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              productCount(item.id, "plus");
                            }}
                          >
                            +
                          </button>
                        </div>
                        <p className="totalPriceValue">
                          $ {item.price * item.amount}.00
                        </p>
                        <button
                          onClick={() => {
                            removeProduct(item.id);
                          }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="cartTotals">
              <p className="mainTotalsTitle">Cart Totals</p>
              <div className="cartTotal">
                <p>Coupon Apply</p>
                <form action="#">
                  <input
                    value={inputValue}
                    type="text"
                    onInput={(e) => {
                      setCoupon(e.target.value);
                    }}
                    placeholder="Enter coupon code here..."
                  />
                  <button
                    onClick={() => {
                      checkCoupon(coupon);
                      // setInputValue("");
                    }}
                  >
                    Apply
                  </button>
                </form>
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
                <Link to={"/checkout"}>
                  <button className="checkoutBtn">Proceed To Checkout</button>
                </Link>
                <Link to={"/"}>Continue shopping</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="interested">
        <div className="container">
          <div className="relatedProducts">
            <div className="relatedTitle">
              <h2>You may be interested in</h2>
            </div>
            <div className="relatedProductsBlock">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {productDB.map((item) => {
                  return (
                    <SwiperSlide>
                      <ProductCard item={item} addCart={addCart} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
