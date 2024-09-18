import "./cartbackground.css"
import Arrow from "/assets/dashicons_arrow-down-alt2.png"
import buildingimg from "/assets/Meubel House_Logos-05.png"
function cartbackground (){

    return(
<div  className="cartbackground"> 
    <img src={buildingimg}/>
<h1 id="cart">Cart</h1>
<div id="arrowdiv">
    <h2 className="homeandshop">Home</h2>
    <img id="arrowimg" src={Arrow}></img>
    <h2 className="homeandshop" >Cart</h2>
</div>
</div>
    )
}
export default cartbackground