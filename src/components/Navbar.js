import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      {"-"}
      <NavLink to="/shop">Shop</NavLink>
      {"-"}
      <NavLink to="/about">About</NavLink>
    </div>
  );
};
export default NavBar;