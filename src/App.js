import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Product from "./pages/product";
import Details from "./pages/Details/Details";

import ProductList from "./components/ProductList";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <ProductList />
    </div>
  );
}
export default App;
