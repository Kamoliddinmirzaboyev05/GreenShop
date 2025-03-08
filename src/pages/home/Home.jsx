import React, { useState } from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "../../components/productcard/ProductCard";
function Home({ productDB, addCart, cartProducts }) {
  // Add poduct to Cart

  return (
    <div className="page">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="homeHero">
            <div className="container">
              <div className="homeHeroText">
                <p className="heroTextTitle">Welcome to GreenShop</p>
                <h1>
                  Let’s Make a Better <span className="greenText">Planet</span>
                </h1>
                <p className="homeHeroInfo">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button>SHOP NOW</button>
              </div>
              <div className="homeHeroImg">
                <img src="/heroimg.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeHero">
            <div className="container">
              <div className="homeHeroText">
                <p className="heroTextTitle">Welcome to GreenShop</p>
                <h1>
                  Let’s Make a Better <span className="greenText">Planet</span>
                </h1>
                <p className="homeHeroInfo">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button>SHOP NOW</button>
              </div>
              <div className="homeHeroImg">
                <img src="/heroimg.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeHero">
            <div className="container">
              <div className="homeHeroText">
                <p className="heroTextTitle">Welcome to GreenShop</p>
                <h1>
                  Let’s Make a Better <span className="greenText">Planet</span>
                </h1>
                <p className="homeHeroInfo">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button>SHOP NOW</button>
              </div>
              <div className="homeHeroImg">
                <img src="/heroimg.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="homePage">
        <main>
          <section className="section1">
            <div className="container">
              <div className="sideBar">
                <h2>Categories</h2>
                <div className="sideBarList">
                  <div className="col">
                    <p>House Plants</p>
                    <p>Potter Plants</p>
                    <p>Seeds</p>
                    <p>Small Plants</p>
                    <p>Big Plants</p>
                    <p>Succulents</p>
                    <p>Trerrariums</p>
                    <p>Gardening</p>
                    <p>Accessories</p>
                  </div>
                  <div className="col">
                    <p>(33)</p>
                    <p>(12)</p>
                    <p>(65)</p>
                    <p>(39)</p>
                    <p>(23)</p>
                    <p>(17)</p>
                    <p>(19)</p>
                    <p>(13)</p>
                    <p>(18)</p>
                  </div>
                </div>
                <div className="sideBarRange">
                  <h2>Price Range</h2>
                  <input type="range" />
                  <p className="priceRange">
                    Price: <span>$39 - $1230</span>
                  </p>
                  <button>Filter</button>
                </div>
                <div className="sideBarSize">
                  <h2>Size</h2>
                  <div className="sizes">
                    <div className="col">
                      <p>Small</p>
                      <p>Medium</p>
                      <p>Large</p>
                    </div>
                    <div className="col">
                      <p>(119)</p>
                      <p>(86)</p>
                      <p>(78)</p>
                    </div>
                  </div>
                </div>
                <div className="sideBarAd">
                  <img src="/supersale.png" alt="" />
                </div>
              </div>
              <div className="productSide">
                <div className="productNav">
                  <div className="productNavLinks">
                    <NavLink to={"/"}>All Plants</NavLink>
                    <NavLink to={"/arrivals"}>New Arrivals</NavLink>
                    <NavLink to={"/sale"}>Sale</NavLink>
                  </div>
                  <div className="productNavFilter">
                    <p>Sort by: </p>
                    <select name="select" id="select">
                      <option value="defoult" disabled selected>
                        Default sorting
                      </option>
                    </select>
                  </div>
                </div>
                <div className="productsBlock">
                  {productDB.map((item) => {
                    return <ProductCard item={item} addCart={addCart} />;
                  })}
                </div>
                <div className="pageNum">
                  <div className="numBtns">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section2">
            <div className="container">
              <div className="brendProductBlock">
                <div className="brendProductBox">
                  <div className="boxImg">
                    <img src="/box2.1.png" alt="" />
                  </div>
                  <div className="brendProductBoxText">
                    <h2>Summer cactus & succulents</h2>
                    <p>
                      We are an online plant shop offering a wide range of cheap
                      and trendy plants
                    </p>
                    <button>
                      Find More <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="brendProductBox">
                  <div className="boxImg">
                    <img src="/box2.2.png" alt="" />
                  </div>
                  <div className="brendProductBoxText">
                    <h2>Summer cactus & succulents</h2>
                    <p>
                      We are an online plant shop offering a wide range of cheap
                      and trendy plants
                    </p>
                    <button>
                      Find More <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section3">
            <div className="container">
              <div className="sectionTitle">
                <h2>Our Blog Posts</h2>
                <p>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants.
                </p>
              </div>
              <div className="blogPosts">
                <div className="post">
                  <div className="postImg">
                    <img src="/box3.1.png" alt="" />
                  </div>
                  <div className="postText">
                    <p className="postDate">September 12 | Read in 6 minutes</p>
                    <h2>Cactus & Succulent Care Tips</h2>
                    <p className="postInfo">
                      Cacti are succulents are easy care plants for any home or
                      patio.{" "}
                    </p>
                    <button>
                      <p>Read More</p>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="post">
                  <div className="postImg">
                    <img src="/box3.2.png" alt="" />
                  </div>
                  <div className="postText">
                    <p className="postDate">September 12 | Read in 6 minutes</p>
                    <h2>Top 10 Succulents for Your Home</h2>
                    <p className="postInfo">
                      Best in hanging baskets. Prefers medium to high light.
                    </p>
                    <button>
                      <p>Read More</p>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="post">
                  <div className="postImg">
                    <img src="/box3.3.png" alt="" />
                  </div>
                  <div className="postText">
                    <p className="postDate">September 12 | Read in 6 minutes</p>
                    <h2>Cacti & Succulent Care Tips</h2>
                    <p className="postInfo">
                      Cacti are succulents are easy care plants for any home or
                      patio.{" "}
                    </p>
                    <button>
                      <p>Read More</p>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="post">
                  <div className="postImg">
                    <img src="/box3.4.png" alt="" />
                  </div>
                  <div className="postText">
                    <p className="postDate">September 12 | Read in 6 minutes</p>
                    <h2>Best Houseplants Room by Room</h2>
                    <p className="postInfo">
                      Cacti are succulents are easy care plants for any home or
                      patio.{" "}
                    </p>
                    <button>
                      <p>Read More</p>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
