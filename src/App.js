import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <p>The Shop</p>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}
export default App;
