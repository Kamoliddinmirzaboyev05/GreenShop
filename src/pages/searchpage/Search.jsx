import React from "react";
import "./Search.css";
import { NavLink } from "react-router-dom";
import ProductCard from "../../components/productcard/ProductCard";
import "./Search.css";
function Search({ productDB, addToLiked, addCart }) {
  return (
    <div className="page">
      <div className="searchPage">
        <section className="section1">
          <div className="container">
            <div className="sideBar">
              <h2>Categories</h2>
              <div className="sideBarList">
                <div className="col">
                  <p>House Plants</p>
                  <p>Seeds</p>
                  <p>Small Plants</p>
                  <p>Succulents</p>
                </div>
                <div className="col">
                  <p>(33)</p>
                  <p>(12)</p>
                  <p>(65)</p>
                  <p>(39)</p>
                 
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
                  return (
                    <ProductCard
                      item={item}
                      addCart={addCart}
                      addToLiked={addToLiked}
                    />
                  );
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
      </div>
    </div>
  );
}

export default Search;
