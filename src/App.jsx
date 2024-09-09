
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { useState } from "react";
import Home from './pages/Home/Home'
import Shop from './pages/shoppage/Shop'
import Contact from './pages/contactpage/Contact'
import Homepage from "./pages/Homepage/Homepage";
import Product from "./pages/productpage/product";
import Cartpage from "./pages/Cartpage/Cartpage"
import { CartProvider } from "./components/cartcontext/cartcontext";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}>
      <Route path="Home" element={<Home setSelectedCategory={setSelectedCategory}></Home>}></Route>
      <Route index element={<Home setSelectedCategory={setSelectedCategory}></Home>}></Route>
      <Route path="Shop" element={<Shop selectedCategory={selectedCategory} ></Shop>}></Route>
      <Route path="Contact" element={<Contact></Contact>}></Route>
      <Route path="/product/:id" element={<Product></Product>}></Route>
      <Route path="/Cartpage" element={<Cartpage />} />
      
      </Route>
      
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
