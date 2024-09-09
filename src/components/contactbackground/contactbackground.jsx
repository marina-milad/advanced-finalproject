import "./contactbackground.css"
import Arrow from "../../../public/assets/dashicons_arrow-down-alt2.png"
import buildingimg from "../../../public/assets/Meubel House_Logos-05.png"
function contactbackground (){

    return(
<div  className="contactbackground"> 
    <img src={buildingimg}/>
<h1 id="contact">CONTACT</h1>
<div id="arrowdiv">
    <h2 className="homeandshop">Home</h2>
    <img id="arrowimg" src={Arrow}></img>
    <h2 className="homeandshop" >Contact</h2>
</div>
</div>
    )
}
export default contactbackground