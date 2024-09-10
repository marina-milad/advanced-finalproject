
import Cartbackground from "../../components/cartbackground/cartbackground"
import Support from "../../components/support/support"
import DELETE from "../../../public/assets/ant-design_delete-filled.png"
import "./Cartpage.css"
import { useContext } from 'react';
import { CartContext } from '../../components/cartcontext/cartcontext';


function cartpage (){
    const { cartItems, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };
    return (
        <>
    <Cartbackground></Cartbackground>
<div className="cartcontainer">
    <div className="leftcartdiv">
        <div className="cartdetails">
<p>Product</p>
<p>Price</p>
<p>Quantity</p>
<p>Subtotal</p>
        </div>

        {cartItems.map((item) => (
            <div key={item.id} className="cartitem">
            <img id="productphoto" src={item.image} alt={item.title} />
            <p id="producttitle">{item.title}</p>
            <p id="productprice">{item.price} USD</p>
            <p id="productquantity">{item.quantity}</p>
              <p id="productsubtotal">{(item.price * item.quantity).toFixed(2)} USD</p>
            <button id="deletebtn" onClick={() => removeFromCart(item.id)}>
                <img src={DELETE}/>
            </button>
            </div>
        ))}

    </div>
    <div className="rightcartdiv">
<h1>Cart Totals</h1>
<label> Total   <span>{calculateTotal()} USD</span> </label>
<button className="checkoutbtn">Check Out</button>
    </div>

</div>

    <Support></Support>
        </>
    )
}
export default cartpage