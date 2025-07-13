import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CartPage from "./Pages/CartPage";
import Products from "./Pages/Products";
import {useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";

function App() {
  const [location, setLocation] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        try {
          const response = await axios.get(url, {
            headers: {
              "User-Agent": "Techcom/1.0 (wasifbinnasir@gmail.com)",
            },
          });
          console.log(response.data.address);
          setLocation(response.data.address || null);
        } catch (error) {
          console.error("Error fetching location data:", error);
        } finally {
          setIsDropdownOpen(false);
        }
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  };

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
