import { Link } from "react-router-dom"
import "./Footer.css"
import footerlogo from "../../../public/assets/Funiro..png"
function Footer (){
    return (
        <div className="footercontainer">
         <div className="footerdiv">
        <div id="logodiv">
            <img  id="footerimg" src={footerlogo}/>
            <label id="footerlabel">400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</label>
        </div>
        <div className="linksdiv">
        <ul id="ullink">
        <label className="graylabels">Links</label>
            <li>
              <Link className="footerlinks" to="/Home">Home</Link>
            </li>
            <li>
              <Link className="footerlinks" to="/Shop">Shop</Link>
            </li>
            <li>
              <Link className="footerlinks" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="helppage">
            <label className="graylabels"> Help</label>
            <label>Payment Options</label>
            <label>Returns</label>
            <label>Privacy Policies</label>
        </div>
        <div className="subscribediv">
            <label className="graylabels">Newsletter</label>
            <div className="subscdiv"><input  id="inputfield" placeholder="Enter Your Email Address"></input>
            <button id="subscribebtn">subscribe</button></div>
        </div>
        </div>
        <hr></hr>
        <label id="lastlabel">2023 furino. All rights reverved</label>
        </div>
    )
}
export default Footer