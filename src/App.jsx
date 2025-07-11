import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CartPage from "./Pages/CartPage";
import Products from "./Pages/Products";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const getLocation = async () => {
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
          const exactLocation = response.data.address;
          console.log(exactLocation);
          
          setLocation(exactLocation);
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar location={location} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<Products />} />{" "}
        {/* Fixed dynamic route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
