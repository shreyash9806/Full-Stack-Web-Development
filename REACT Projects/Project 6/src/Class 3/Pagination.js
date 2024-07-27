import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Pagination() {
  const { totalPage, page, changeHandler } =
    useContext(AppContext);
  return (
    <div className="border-gray-300 border-b-2 border-t-2  py-[7px]">
      <div className="flex items-center justify-between sm:w-7/12 sm:mx-auto mx-4">
        <div className="space-x-4">
          {page > 1 && (
            <button
              className="border-2 border-gray-300 px-[15px]
      py-[5px] rounded-md"
              onClick={() => {
                changeHandler(page - 1);
              }}
            >
              Previous
            </button>
          )}
          {page < totalPage && (
            <button
              className="border-2 border-gray-300 px-[15px]
                py-[5px] rounded-md"
              onClick={() => {
                changeHandler(page + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
        <h1 className="font-semibold">
          Page {page} of {totalPage}
        </h1>
      </div>
    </div>
  );
}

export default Pagination;
