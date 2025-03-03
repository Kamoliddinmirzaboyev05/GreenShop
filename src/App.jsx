import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ErrorPage from "./pages/errorpage/ErrorPage";
import Cart from "./pages/cart/Cart";
import Account from "./pages/account/Account";
import Address from "./pages/address/Address";

function App() {
  const [productDB, setProductDB] = useState([
    {
      id: 1,
      img: "/box1.1.png",
      title: "Barberton Daisy",
      price: "$119.00",
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
      price: "$169.00",
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
      price: "$199.00",
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
      price: "$129.00",
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
      price: "$139.00",
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
      price: "$179.00",
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 1,
      img: "/box1.7.png",
      title: "Bird's Nest Fern",
      price: "$99.00",
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 1,
      img: "/box1.8.png",
      title: "Broadleaf Lady Palm",
      price: "$59.00",
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
    {
      id: 1,
      img: "/box1.9.png",
      title: "Chinese Evergreen",
      price: "$39.00",
      imgs: ["/box1.1.png", "/box1.1.png", "/box1.1.png", "/box1.1.png"],
      descr:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
      size: "S",
      category: "Potter Plants",
    },
  ]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home productDB={productDB} />} />
        <Route
          path="/product/:id"
          element={<Product productDB={productDB} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/address" element={<Address />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
