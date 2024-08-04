import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
function Home() {
  const [loading, setLoading] = useState(true);
  const [item, setItems] = useState([]);

  const apiUrl = "https://fakestoreapi.com/products";
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setItems(data);
    } catch (error) {
      console.log("Error In Fetching Data");
      setItems([]);
      setLoading(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      {loading ? <Spinner /> : <Products product={item} />}
    </div>
  );
}

export default Home;
