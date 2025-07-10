import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CartPage from "./Pages/CartPage";
import Products from "./Pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/product/:id" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
