import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
// import Home from "./pages/home";
import Login from "./pages/Login/Login";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Product from "./pages/product";
import Details from "./pages/Details/Details";

import ProductList from "./components/ProductList";
import Header from "./components/header";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}
export default App;
