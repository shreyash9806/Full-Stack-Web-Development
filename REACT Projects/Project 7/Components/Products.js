import React from "react";
import Item from "./Item";

function Products({ product }) {
  return (
    <div
      className="w-10/12 gap-x-5 gap-y-8 mx-auto grid 
    sm:w-11/12 sm:grid-cols-2
    md:w-[97%]
    md:grid-cols-3 py-[50px]
    lg:grid-cols-4 lg:w-[95%] xl:w-10/12"
    >
      {product.map((ele) => {
        return <Item key={ele.id} item={ele} />;
      })}
    </div>
  );
}

export default Products;
