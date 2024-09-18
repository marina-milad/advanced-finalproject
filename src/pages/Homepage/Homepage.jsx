import { Link, Outlet,useNavigate } from "react-router-dom"
import { useState,useContext } from "react";
import { CartContext } from "../../components/cartcontext/cartcontext";
import "./Homepage.css"
import logo from "/assets/Frame 168.png"
import cart from "/assets/Vector.png"
import Footer from "../../components/footer/Footer"
function Homepage (){
  const [isCartOpen, setCartOpen] = useState(false);

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate(); 

  const goToCartPage = () => {
    navigate("/Cartpage");  
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);}
    
    return(
        <>
        <nav className="Navbar">
        <img  id="logo" src={logo}/>
          <ul id="pagelink">
            <li>
              <Link className="linkstyle" to="/Home">Home</Link>
            </li>
            <li>
              <Link className="linkstyle" onClick={() => setSelectedCategory("")} to="/Shop">Shop</Link>
            </li>
            <li>
              <Link className="linkstyle" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="cart-container">
          <button id="cartbtn" onClick={toggleCart} >
            <img src={cart} alt="Cart" />
          </button>

          {isCartOpen && (
            <>
            <div className="overlay" onClick={toggleCart}></div>
            <div className="cart-dropdown">
              <h3>Shopping Cart</h3>
              <hr/>
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <div className="chooseditems">
                  {cartItems.map((item) => (
                    <div className="carticon" key={item.id}>
                      <img  id="cartimage"  src={item.image}/>
                      {item.title}  <br></br>
                      {item.quantity}  ×  Rs.{item.price}
                    </div>
                  ))}
                  <label > SubTotal  <span>${calculateSubtotal()}</span></label>
                  <hr></hr>
                </div>
              )}
              <button className="cartpagebtn" onClick={goToCartPage}>Cart </button>
            </div>
            </>
          )}
        </div>
          
        </nav>

        <Outlet></Outlet>


<Footer></Footer>
              </>
    )
}
export default Homepage