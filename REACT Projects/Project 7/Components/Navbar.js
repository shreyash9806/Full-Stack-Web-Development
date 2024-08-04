import React from "react";
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div className=" bg-[#0f172a]">
      <div className="flex items-center w-11/12 sm:w-11/12 sm:grid-cols-2 md:w-[97%] md:grid-cols-3 lg:grid-cols-4 lg:w-[95%] mx-auto justify-between py-[15px]
      xl:w-10/12">
        <NavLink to={"/"}>
          <img width={"170px"} src={logo} alt="" />
        </NavLink>
        <div className="text-white flex gap-4 items-center">
          <NavLink
            className={
              "transition-all duration-300 hover:text-[#16a34a] text-xl"
            }
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink to={"/cart"}>
            <div className="relative">
              <FaShoppingCart
                className=" transition-all duration-300 hover:text-[#16a34a]"
                fontSize={"1.5rem"}
              />
              {cart.length > 0 && (
                <span className="absolute hover:text-white -top-1 -right-2 text-xs w-5 h-5 text-center flex justify-center items-center animate-bounce bg-green-700 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
