import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Slices/CartSlice";
import toast from "react-hot-toast";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        itemIndex !== 0 ? "border-t-2" : " "
      } border-gray-500 flex flex-col items-center pt-[40px] pb-[30px] 
         w-11/12 mx-auto text-gray-700
         md:flex-row md:gap-14`}
    >
      <div className="w-[30%] lg:h-[270px] h-[270px] md:h-[120px] md:w-[55%] ">
        <img className="w-[100%] h-[100%]" src={item.image} alt="" />
      </div>

      <div className="space-y-6">
        <h1 className="text-[1.4rem] font-semibold ">{item.title}</h1>
        <p className="text-[1.2rem]">{item.description.substring(0, 82)}...</p>
        <div className="flex justify-between items-center">
          <h1
            className="text-xl font-semibold 
            flex items-center text-[#16a34a]"
          >
            <FiDollarSign />
            {item.price}
          </h1>
          <button
            onClick={() => {
              dispatch(removeFromCart(item.id));
              toast.error("Item Removed From Cart!");
            }}
          >
            <MdDelete
              fontSize={"2.3rem"}
              className="bg-red-300 rounded-full text-red-700 p-[10px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
