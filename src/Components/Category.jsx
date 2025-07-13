import React, { useEffect } from "react";
import { getData } from "../Context/DataContext";

function Category() {
  const { data, fetchAllProducts } = getData();

  const UniqueCategories = (data, property) => {
    let newVal = data?.map((currElem) => {
      return currElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const displayCategory = UniqueCategories(data, "category");
  console.log(displayCategory);

  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div className="bg-[#101829]">
      <div className="flex justify-evenly items-center py-7 px-4">
        {displayCategory.map((item, index) => {
          return <button
            key={index}
            className="uppercase bg-gradient-to-r from-red-500 to-purple-500 rounded-md text-white cursor-pointer px-3 py-1 "
          >
            {item}
          </button>;
        })}
      </div>
    </div>
  );
}

export default Category;
