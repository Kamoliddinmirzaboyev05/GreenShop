import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ErrorPage from "./pages/errorpage/ErrorPage";
import Cart from "./pages/cart/Cart";
import Account from "./pages/account/Account";
import Address from "./pages/address/Address";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const [productDB, setProductDB] = useState([
    {
      id: 1,
      img: "/box1.1.png",
      title: "Barberton Daisy",
      price: 119.0,
      discount: 15,
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVLAJbyGCu3Zk27HVTwQE1yNFSL-FBOs6XNMM_TGLdx_NEKnGrZcOQ2O5ehwziaCnD5E&usqp=CAU",
        "https://baitukas.lt/wp-content/uploads/2021/06/c5fb4c24c4c3389e203a908092c4aa1d-510x510.png",
        "https://baitukas.lt/wp-content/uploads/2021/06/8ffee5a43000ad867a0c5de3d4db4fbe-510x510.png",
        "https://tiimg.tistatic.com/fp/1/007/329/octa-ball-terrarium-for-home-decor-purpose-110.jpg",
      ],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 2,
      img: "/box1.2.png",
      title: "Angel Wing Begonia",
      price: 169.0,
      discount: 10,
      imgs: [
        "https://plantsforpetparents.com/cdn/shop/collections/6PALM_NEANTHEBELLA-1_91418a21-bd18-4941-8c78-1b4744ed2366.webp?v=1693561170",
        "https://images.thdstatic.com/productImages/5fad57fb-d5ea-44ba-86da-2c15d5b240c0/svn/costa-farms-house-plants-co-brdfern-3-gp-64_600.jpg",
        "https://images.thdstatic.com/productImages/cec76877-a200-4ae0-92c3-9bbee4a99a32/svn/house-plants-4-fern-leslie-64_600.jpg",
        "https://www.thegardenstore.sg/image/cache/catalog/products/Plant/Asplenium%20Bird%20Nest%20Fern%20Small-910x1155.png",
      ],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 3,
      img: "/box1.3.png",
      title: "African Violet",
      price: 199.0,
      discount: 20,
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 4,
      img: "/box1.4.png",
      title: "Beach Spider Lily",
      price: 129.0,
      discount: 12,
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 5,
      img: "/box1.5.png",
      title: "Blushing Bromeliad",
      price: 139.0,
      discount: 8,
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 6,
      img: "/box1.6.png",
      title: "Aluminum Plant",
      price: 179.0,
      discount: 12,
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 7,
      img: "/box1.7.png",
      title: "Bird's Nest Fern",
      price: 99.0,
      discount: 7,
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 8,
      img: "/box1.8.png",
      title: "Broadleaf Lady Palm",
      price: 59.0,
      discount: 5,
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 9,
      img: "/box1.9.png",
      title: "Chinese Evergreen",
      price: 39.0,
      discount: 3,
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
  ]);

  const [cartProducts, setCartProducts] = useState(
    localStorage.getItem("cartProducts")
      ? JSON.parse(localStorage.getItem("cartProducts"))
      : []
  );

  // Add product to cart funtction
  const addCart = (id) => {
    const isHave = cartProducts.find((product) => product.id == id);
    if (!isHave) {
      const product = productDB.filter((item) => {
        return item.id == id;
      });
      setCartProducts([...cartProducts, { ...product[0], amount: 1 }]);
    } else {
      const filteredData = cartProducts.filter((item) => {
        return item.id != id;
      });
      setCartProducts(filteredData);
    }
  };
  const [totalPrice, setTotalPrice] = useState(0);
  // calculate total price function
  useEffect(() => {
    const newTotalPrice = cartProducts.reduce(
      (sum, item) => sum + item.price * item.amount,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartProducts]);
  // remove product function
  const removeProduct = (id) => {
    const filteredProducts = cartProducts.filter((item) => {
      return id != item.id;
    });
    setCartProducts(filteredProducts);
  };

  //calculate dic=scount function
  const [totalDiscount, setTotalDiscount] = useState(0);
  useEffect(() => {
    const discount = cartProducts.reduce(
      (sum, item) => sum + (item.price * item.discount * item.amount) / 100,
      0
    );
    setTotalDiscount(discount);
  }, [cartProducts]);

  // calculate basic total price

  const [totalShipping, setTotalShipping] = useState(0);
  useEffect(() => {
    const shipping = cartProducts.reduce((sum, item) => sum + item.amount, 0);
    setTotalShipping(shipping);
  }, [cartProducts]);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  const productCount = (id, key) => {
    var updatedCart = cartProducts.map((item) => {
      if (item.id != id) {
        return item;
      } else {
        if (key == "plus") {
          return { ...item, amount: item.amount + 1 };
        } else {
          if (item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }
      }
    });
    setCartProducts(updatedCart);
  };
  return (
    <BrowserRouter>
      <Navbar cartProducts={cartProducts} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addCart={addCart}
              cartProducts={cartProducts}
              productDB={productDB}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<Product productDB={productDB} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              totalShipping={totalShipping}
              totalDiscount={totalDiscount}
              totalPrice={totalPrice}
              addCart={addCart}
              productDB={productDB}
              removeProduct={removeProduct}
              productCount={productCount}
              cartProducts={cartProducts}
            />
          }
        />
        <Route path="/account" element={<Account />} />
        <Route path="/address" element={<Address />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              totalShipping={totalShipping}
              totalDiscount={totalDiscount}
              totalPrice={totalPrice}
              addCart={addCart}
              productDB={productDB}
              removeProduct={removeProduct}
              productCount={productCount}
              cartProducts={cartProducts}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
