import React from "react";

function Home({ text }) {
  return (
    <div className="h-[80vh] text-3xl text-white flex justify-center items-center">
      {text}
    </div>
  );
}

export default Home;
