import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
function ProductCard({ item, addCart, addToLiked }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="productBox">
        <div className="productImg">
          {item.liked == true && (
            <span className="likedIcon">
              <i className="fas fa-heart"></i>
            </span>
          )}
          {item.discount && (
            <div className="productDiscount">
              <p>{item.discount}% OFF</p>
            </div>
          )}

          <div className="hoverIcons">
            <span
              onClick={(e) => {
                e.preventDefault();
                addCart(item.id);
              }}
            >
              <i  className={item.incart ? "fas fa-shopping-cart likedActive" : "fas fa-shopping-cart"}></i>
            </span>
            <i
              onClick={(e) => {
                e.preventDefault();
                addToLiked(item.id);
              }}
              className={
                item.liked ? "fas fa-heart likedActive" : "fa-regular fa-heart"
              }
            ></i>
            <i className="fas fa-search"></i>
          </div>
          <img src={item.img} alt="" />
        </div>
        <div className="productText">
          <h3>{item.title}</h3>
          <div className="productPrices">
            <p>$ {item.price}.00</p>
            {item.discount && (
              <p className="nonActivePrice">
                ${((item.price * 100) / (100 - item.discount)).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
