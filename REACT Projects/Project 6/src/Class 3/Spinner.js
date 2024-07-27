import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center h-[50vh] items-center flex-col">
      <div className="loader"></div>
      <h1 className="text-2xl font-semibold">Loading...</h1>
    </div>
  );
}

export default Spinner;
