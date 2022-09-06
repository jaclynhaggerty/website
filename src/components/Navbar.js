import { NavLink } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  function handleChange(event) {
    setSearchText(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("clicked");
  }
  function goToUser() {
    console.log("user");
  }
  function goToLike() {
    console.log("likes");
  }
  function goToShop() {
    console.log("shop");
  }
  return (
    <div className="navbar-container">
      <p style={{ color: "white" }}>
        <span style={{ color: "black" }}>The</span> Shop
      </p>

      <div className="navTop">
        <div>
          <NavLink
            to="/home"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/product"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Product
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/blog"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Blog
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            <span>Shop</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/contact"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className="navTop">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              // value={this.state.value}
              onChange={handleChange}
            />
          </label>
          <button type="submit" value="Submit">
            Search
          </button>
        </form>
      </div>

      <div className="icons">
        <div
          onClick={() => {
            goToUser();
          }}
          className="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 50"
            stroke="white"
          >
            <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <div
          onClick={() => {
            goToShop();
          }}
          className="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 50"
            stroke="white"
          >
            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        <div
          onClick={() => {
            goToLike();
          }}
          className="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 50"
            stroke="white"
          >
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
