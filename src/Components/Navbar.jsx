/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin, ShoppingCart, ChevronDown, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const nav = [
  { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Contact", to: "/contact", id: 3 },
  { name: "Cart", to: "/cart", id: 4 },
  { name: "Products", to: "/product", id: 5 },
];

export default function Navbar({
  location,
  getLocation,
  isDropdownOpen,
  setIsDropdownOpen,
}) {
  const [cartCount, setCartCount] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="py-3 shadow-xs shadow-black bg-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link
            to={"/"}
            className="flex items-center justify-between text-3xl text-black font-bold"
          >
            <span className="text-red-500">Z</span>aptro
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="font-semibold gap-1.5 flex items-center text-xs hover:text-red-500 transition-colors"
            >
              <MapPin className="text-red-500 w-4 h-4" />
              {location ? (
                <div className="text-left">
                  <p>{location.amenity || "Unknown Place"}</p>
                  <p>{location.town || "Unknown State"}</p>
                  <p>{location.district || "Unknown District"}</p>
                  <p>{location.state || "Unknown State"}</p>
                  <p>{location.country || "Unknown State"}</p>
                </div>
              ) : (
                <p>Add Location</p>
              )}
              <ChevronDown className="w-4 h-4" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-50 border border-gray-200 border-solid">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold">Change Location</p>
                  <X
                    className="w-4 h-4 cursor-pointer"
                    onClick={toggleDropdown}
                  />
                </div>
                <p
                  className="text-sm p-2 hover:bg-gray-100 rounded cursor-pointer"
                  onClick={getLocation}
                >
                  Use current location
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-7 text-md text-gray-600 font-semibold cursor-pointer">
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
            <SignedOut>
              <SignInButton className="px-3 py-1 bg-red-600 text-white rounded-lg" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </div>
    </div>
  );
}
