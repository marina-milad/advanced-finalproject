
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { useState } from "react";
import Home from './pages/Home/Home'
import Shop from  "./pages/shoppage/Shop.jsx"
import Contact from './pages/contactpage/Contact.jsx'
import Homepage from "./pages/Homepage/Homepage.jsx";
import Product from "./pages/productpage/product.jsx";
import Cartpage from "./pages/Cartpage/Cartpage.jsx"
import { CartProvider } from "./components/cartcontext/cartcontext";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}>
      <Route path="home" element={<Home setSelectedCategory={setSelectedCategory}></Home>}></Route>
      <Route index element={<Home setSelectedCategory={setSelectedCategory}></Home>}></Route>
      <Route path="shop" element={<Shop selectedCategory={selectedCategory}/>}></Route>
      <Route path="contact" element={<Contact></Contact>}></Route>
      <Route path="/product/:id" element={<Product></Product>}></Route>
      <Route path="/cartpage" element={<Cartpage />} />
      
      </Route>
      
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
