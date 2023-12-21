import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ countLiked }) => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      {/* navbar */}
      <nav className="navbar">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass" />
          <span className="m-2">Search</span>
        </div>
        <NavLink to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
        <div className="navItem">
          <div className="nav-link">
            <span>Account</span>
            <i className="fa-regular fa-user" />
          </div>

          <div className="nav-link flex">
            <span>Wishlist</span>
            <div className="relative">
              {countLiked > 0 && (
                <span className="w-6 h-6 bg-[#e99494] rounded-full absolute right-0 bottom-4 left-4 animate-[bounce_1.5s_infinite] flex justify-center items-center text-white font-semibold ">
                  {countLiked}
                </span>
              )}
            </div>
            <i className="fa-regular fa-heart" />
          </div>

          <NavLink to="/cart">
            <div className="nav-link flex ">
              <span>Cart</span>
              <div className="relative">
                {cart.length > 0 && (
                  <span className="w-6 h-6 bg-[#e99494] rounded-full absolute right-0 bottom-4 left-4 animate-[bounce_1.5s_infinite] flex justify-center items-center text-white font-semibold ">
                    {cart.length}
                  </span>
                )}

                <i className="fa-solid fa-cart-shopping" />
              </div>
            </div>
          </NavLink>
          <div className="nav-link">
            <span>Stores</span>
            <i className="fa-solid fa-location-dot" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
