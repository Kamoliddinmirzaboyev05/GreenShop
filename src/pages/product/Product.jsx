import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="productPage">
      <div className="container">
        <p className="productWay">Home / Shop</p>
        <div className="productData">
          <div className="productImgs">
            <div className="imgsCol">
              <div className="itemImg">
                <img src="/public/box1.1.png" alt="" />
              </div>
              <div className="itemImg">
                <img src="/public/box1.1.png" alt="" />
              </div>
              <div className="itemImg">
                <img src="/public/box1.1.png" alt="" />
              </div>
              <div className="itemImg">
                <img src="/public/box1.1.png" alt="" />
              </div>
            </div>
            <div className="mainImg">
              <img src="/public/box1.1.png" alt="" />
            </div>
          </div>
          <div className="productDataInfo">
            <h2 className="productInfoTitle">Barberton Daisy</h2>
            <div className="price">
              <p>$119.00</p>
              <div className="stars">
                <img src="/public/stars.svg" alt="" />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
