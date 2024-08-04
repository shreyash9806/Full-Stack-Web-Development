import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { NavLink } from "react-router-dom";
import { FiDollarSign } from "react-icons/fi";

function Cart() {
  const { cart } = useSelector((state) => state);

  let price = 0;
  cart.map((ele) => {
    return (price = price + ele.price);
  });

  let total = cart.length;
  return (
    <div className="relative">
      <Navbar />
      {cart.length > 0 ? (
        <div className="xl:w-10/12 lg:w-[95%] flex flex-col md:flex-row md:gap-8 md:w-11/12 mx-auto">
          <div className="">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="w-11/12 md:w-[40%] mx-auto pt-[120px] pb-[60px]">
            <h2
              className="text-green-700
          text-xl font-semibold"
            >
              YOUR CART
            </h2>
            <h1 className="text-6xl text-green-700 pb-[25px] font-semibold">
              SUMMARY
            </h1>
            <p className="text-2xl font-semibold pb-[20px]">
              Total Items: {total}
            </p>
            <p className="flex items-center mb-[30px] text-2xl font-semibold">
              Total Amount :
              <span className="font-bold flex items-center">
                <FiDollarSign />
                {price.toFixed(2)}
              </span>{" "}
            </p>

            <button
              className="text-2xl font-semibold text-white 
          py-[10px] bg-green-700 border-2
          transition-all duration-300 hover:text-green-700 hover:bg-white border-green-700 rounded-md w-[100%]"
            >
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="h-[100vh] flex-col gap-4 w-[100vw] absolute -z-10 top-0 flex justify-center items-center">
          <h1 className="text-xl font-semibold">Your Cart is Empty!</h1>
          <NavLink
            className="text-white transition-all duration-300 border-2 border-green-600
             hover:bg-white hover:text-green-500 bg-green-600 py-[15px] text-xl px-[35px] rounded-lg"
            to={"/"}
          >
            SHOP NOW
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
