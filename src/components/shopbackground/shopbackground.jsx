import "./shopbackground.css"
import Arrow from "../../../public/assets/dashicons_arrow-down-alt2.png"
function shopbackground (){

    return(
<div  className="shopbackground"> 
<h1 id="shop">SHOP</h1>
<div id="arrowdiv">
    <h2 className="homeandshop">Home</h2>
    <img id="arrowimg" src={Arrow}></img>
    <h2 className="homeandshop" >Shop</h2>
</div>
</div>
    )
}
export default shopbackground