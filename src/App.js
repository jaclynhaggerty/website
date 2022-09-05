import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div className="App">
      <p>The Shop</p>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element = {<Details />} />
      </Routes>
    </div>
  );
}
export default App;
