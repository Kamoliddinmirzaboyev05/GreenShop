import React from "react";
import "./Liked.css";
import ProductCard from "../../components/productcard/ProductCard";

function Liked({ likedProducts, addToLiked }) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="page">
      <div className="container">
        <h2>Liked products</h2>
        <div className="likedProductsBlock">
          {likedProducts.map((item) => {
            console.log(item);

            return <ProductCard item={item} addToLiked={addToLiked} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Liked;
