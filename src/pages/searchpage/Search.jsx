import React, { useState } from "react";
import "./Search.css";
import { NavLink } from "react-router-dom";
import ProductCard from "../../components/productcard/ProductCard";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Search.css";
function Search({
  editProduct,
  small,
  setSortBy,
  seeds,
  hausePlants,
  addToLiked,
  addCart,
}) {
  const [type, setType] = useState("all");
  const [typeName, setTypeName] = useState("all");
  const [value, setValue] = React.useState([30, 250]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div className="page">
      <div className="searchPage">
        <section className="section1">
          <div className="container">
            <div className="sideBar">
              <h2>Categories</h2>
              <div className="sideBarList">
                <div className="col">
                  <p
                    onClick={() => {
                      setTypeName("house");
                    }}
                  >
                    House Plants
                  </p>
                  <p
                    onClick={() => {
                      setTypeName("seeds");
                    }}
                  >
                    Seeds
                  </p>
                  <p
                    onClick={() => {
                      setTypeName("small");
                    }}
                  >
                    Small Plants
                  </p>
                  <p>Succulents</p>
                </div>
                <div className="col">
                  <p>({hausePlants.length})</p>
                  <p>({seeds.length})</p>
                  <p>({small.length})</p>
                  <p>(39)</p>
                </div>
              </div>
              <div className="sideBarRange">
                <h2>Price Range</h2>
                <Box sx={{ width: 300 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={20}
                    max={500}
                  />
                </Box>
                <p className="priceRange">
                  Price: <span>$39 - $1230</span>
                </p>
                <button
                  onClick={() => {
                    setType(typeName);
                  }}
                >
                  Filter
                </button>
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
                  <NavLink
                    onClick={() => {
                      setType("all");
                    }}
                    to={"/search"}
                  >
                    All Plants
                  </NavLink>
                  <NavLink to={"/arrivals"}>New Arrivals</NavLink>
                  <NavLink to={"/sale"}>Sale</NavLink>
                </div>
                <div className="productNavFilter">
                  <p>Sort by: </p>
                  <select
                    onChange={(e) => {
                      setSortBy(e.target.value);
                    }}
                    name="select"
                    id="select"
                  >
                    <option value="defoult">Default sorting</option>
                    <option value="alphabet">By Alphabet</option>
                    <option value="cheapper">By cheaper</option>
                    <option value="expensive">By more expensive</option>
                    <option value="promotions">Promotions</option>
                  </select>
                </div>
              </div>
              <div className="productsBlock">
                {editProduct.map((item) => {
                  if (type == "house") {
                    if (item.type == "house") {
                      return (
                        <ProductCard
                          item={item}
                          addCart={addCart}
                          addToLiked={addToLiked}
                        />
                      );
                    }
                  } else if (type == "seeds") {
                    if (item.type == "seeds") {
                      return (
                        <ProductCard
                          item={item}
                          addCart={addCart}
                          addToLiked={addToLiked}
                        />
                      );
                    }
                  } else if (type == "small") {
                    if (item.type == "small") {
                      return (
                        <ProductCard
                          item={item}
                          addCart={addCart}
                          addToLiked={addToLiked}
                        />
                      );
                    }
                  } else {
                    return (
                      <ProductCard
                        item={item}
                        addCart={addCart}
                        addToLiked={addToLiked}
                      />
                    );
                  }
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
