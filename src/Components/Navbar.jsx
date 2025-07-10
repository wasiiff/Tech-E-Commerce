import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "lucide-react";

const nav = [
  {
    name: "Home",
    to: "/",
    id: 1,
  },
  {
    name: "About",
    to: "/about",
    id: 2,
  },
  {
    name: "Contact",
    to: "/contact",
    id: 3,
  },
  {
    name: "Cart",
    to: "/cart",
    id: 4,
  },
  {
    name: "Products",
    to: "/product",
    id: 5,
  },
];

export default function Navbar() {
  const [location, setLocation] = useState(false); // Fixed typo here
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="w-full py-6 shadow-lg shadow-black bg-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo Section  */}
        <div className="flex items-center gap-4">
          <Link
            to={"/"}
            className="flex items-center justify-between text-3xl text-black font-bold"
          >
            <span className="text-red-500">Z</span>aptro
          </Link>
          <MapPin className="text-red-500" />
          <p className="font-semibold">
            {location ? "Location" : "Add Location"}
          </p>
        </div>
        <ul className="flex gap-7 text-md text-gray-600 font-semibold">
          {nav.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-red-500 text-red-500"
                  : "hover:text-red-500 transition-colors"
              }
            >
              <li>{item.name}</li>
            </NavLink>
          ))}
          <li className="flex relative">
            <ShoppingCart className="z-0" />
            <span className="absolute rounded-2xl bg-red-600 text-white text-xs px-1.5 py-0.5 -top-2 -right-2 z-10">
              {cartCount}
            </span>
          </li>
          <li>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg ">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
