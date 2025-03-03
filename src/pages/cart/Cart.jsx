import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
function Cart() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
                <div className="productData">
                  <div className="productNameImg">
                    <div className="productDataImg">
                      <img src="/box1.1.png" alt="" />
                    </div>
                    <div className="prooductDataText">
                      <h2>Barberton Daisy</h2>
                      <p>SKU: 1995751877966</p>
                    </div>
                  </div>
                  <p>$119.00</p>
                  <div className="productCounter">
                    <button>-</button>
                    <p>2</p>
                    <button>+</button>
                  </div>
                  <p>$238.00</p>
                  <button>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
                <div className="productData">
                  <div className="productNameImg">
                    <div className="productDataImg">
                      <img src="/box1.5.png" alt="" />
                    </div>
                    <div className="prooductDataText">
                      <h2>Barberton Daisy</h2>
                      <p>SKU: 1995751877966</p>
                    </div>
                  </div>
                  <p>$119.00</p>
                  <div className="productCounter">
                    <button>-</button>
                    <p>2</p>
                    <button>+</button>
                  </div>
                  <p>$238.00</p>
                  <button>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
                <div className="productData">
                  <div className="productNameImg">
                    <div className="productDataImg">
                      <img src="/box1.3.png" alt="" />
                    </div>
                    <div className="prooductDataText">
                      <h2>Barberton Daisy</h2>
                      <p>SKU: 1995751877966</p>
                    </div>
                  </div>
                  <p>$119.00</p>
                  <div className="productCounter">
                    <button>-</button>
                    <p>2</p>
                    <button>+</button>
                  </div>
                  <p>$238.00</p>
                  <button>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="cartTotals">
              <p className="mainTotalsTitle">Cart Totals</p>
              <div className="cartTotal">
                <p>Coupon Apply</p>
                <form action="#">
                  <input type="text" placeholder="Enter coupon code here..." />
                  <button>Apply</button>
                </form>
                <div className="row">
                  <p>Subtotal</p>
                  <p className="bolderValue">$2,683.00</p>
                </div>
                <div className="row">
                  <p>Coupon Discount</p>
                  <p>(-) 00.00</p>
                </div>
                <div className="row shipping">
                  <p>Shipping</p>
                  <p className="bolderValue">$16.00</p>
                </div>
                <div className="row">
                  <p className="totalPriceKey">Total</p>
                  <p className="totalPrice">$2,699.00</p>
                </div>
                <button className="checkoutBtn">Proceed To Checkout</button>
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
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.1.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.2.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.3.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.4.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.5.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.1.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.2.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.3.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.4.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="productBox">
                    <div className="productImg">
                      <img src="/box1.5.png" alt="" />
                    </div>
                    <div className="productText">
                      <h3>Barberton Daisy</h3>
                      <p>$119.00</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
