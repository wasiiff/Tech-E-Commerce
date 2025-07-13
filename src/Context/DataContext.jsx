import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]); // Initialize as empty array for products

  // Fetching Products From API
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.in/api/products?limit=150"
      );
      const productsData = res.data.products;
      setData(productsData); // Assuming you want to store the response data
      console.log(res);
    } catch (error) {
      console.log(error);
      // You might want to set some error state here
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
