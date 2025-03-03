import React, { useState } from "react";
import "./Product.css";
import { NavLink, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
function Product({ productDB }) {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState(
    productDB.filter((item) => {
      return id == item.id;
    })
  );
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="productPage">
      <div className="container">
        <p className="productWay">Home / Shop</p>
        <div className="productData">
          <div className="productImgs">
            <div className="imgsCol">
              <div className="itemImg">
                <img src={oneProduct[0].img} alt="" />
              </div>
              <div className="itemImg">
                <img src={oneProduct[0].imgs[1]} alt="" />
              </div>
              <div className="itemImg">
                <img src={oneProduct[0].imgs[2]} alt="" />
              </div>
              <div className="itemImg">
                <img src={oneProduct[0].imgs[3]} alt="" />
              </div>
            </div>
            <div className="mainImg">
              <img src={oneProduct[0].img} alt="" />
            </div>
          </div>
          <div className="productDataInfo">
            <h2 className="productInfoTitle">Barberton Daisy</h2>
            <div className="price">
              <p>$119.00</p>
              <div className="stars">
                <img src="/stars.svg" alt="" />
                <p>19 Customer Review</p>
              </div>
            </div>
            <h3>Short Description:</h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.{" "}
            </p>
            <div className="productSize">
              <h3>Size: </h3>
              <div className="productSizes">
                <div className="oneSize activeSize">
                  <p>S</p>
                </div>
                <div className="oneSize">
                  <p>M</p>
                </div>
                <div className="oneSize">
                  <p>L</p>
                </div>
                <div className="oneSize">
                  <p>XL</p>
                </div>
              </div>
            </div>
            <div className="productBtns">
              <div className="counter">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button className="buyNow">BUY NOW</button>
              <button className="addCart">Add to cart</button>
              <button className="likeBtn">
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
            <div className="categories">
              <p>
                SKU : <span>1995751877966</span>
              </p>
              <p>
                Categories : <span>Potter Plants</span>
              </p>
              <p>
                Tags : <span>Home, Garden, Plants</span>
              </p>
            </div>
            <div className="share">
              <h3>Share this products:</h3>
              <div className="productSocials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="descriptions">
          <div className="descrLinks">
            <NavLink to={"/product"}>Product Description</NavLink>
            <NavLink to={"/"}>Reviews (19)</NavLink>
          </div>
          <div className="descrText">
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla.
            </p>
            <p>
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
              feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. The ceramic
              cylinder planters come with a wooden stand to help elevate your
              plants off the ground.{" "}
            </p>
            <h3>Living Room:</h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h3>Dining Room:</h3>
            <p>
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <h3>Office:</h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="relatedProducts">
          <div className="relatedTitle">
            <h2>Releted Products</h2>
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
    </div>
  );
}

export default Product;
