import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Slices/CartSlice";
import toast from "react-hot-toast";

function Item({ item }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);
  function add() {
    dispatch(addToCart(item));
    toast.success('Item Added To Cart')
  }

  function remove() {
    dispatch(removeFromCart(item.id));
    toast.error("Item Removed From Cart!")
  }

  return (
    <div
      className="px-[20px] rounded-2xl flex flex-col items-center justify-between pt-[20px] pb-[15px] shadow-gray-400 shadow-lg
    transition-all ease-in duration-200 hover:scale-[1.07] group hover:shadow-2xl hover:shadow-black"
    >
      <div className="flex text-gray-600 flex-col items-center gap-4">
        <h1 className="text-xl font-semibold truncate w-44">
          {item.title}
        </h1>
        <p className="text-[0.7rem] w-44">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className=" h-[180px] my-[10px] mx-[15px]">
        <img className="w-full h-full " src={item.image} alt="sdsd" />
      </div>
      <div className="flex items-center w-full justify-between">
        <p className=" text-[#16a34a] font-semibold flex items-center">
          {<FiDollarSign />}
          {item.price}
        </p>
        {cart.some((p) => p.id === item.id) ? (
          <button
            className="text-[0.8rem] transition-all duration-300 font-semibold group-hover:text-white border-2 border-black rounded-2xl py-[5px] px-[15px]
        group-hover:bg-[#0f172a]"
            onClick={() => {
              remove(item);
            }}
          >
            REMOVE ITEM
          </button>
        ) : (
          <button
            className="text-[0.8rem] transition-all duration-300 font-semibold group-hover:text-white border-2 border-black rounded-2xl py-[5px] px-[15px]
                  group-hover:bg-[#0f172a]"
            onClick={() => {
              add();
            }}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
