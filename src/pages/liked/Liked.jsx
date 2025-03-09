import React from "react";
import "./Liked.css";
import ProductCard from "../../components/productcard/ProductCard";

function Liked({ likedProducts,addToLiked }) {
  console.log(likedProducts);

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
