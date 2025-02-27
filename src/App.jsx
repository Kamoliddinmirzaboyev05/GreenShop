import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ErrorPage from "./pages/errorpage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/product" element={<Product/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
