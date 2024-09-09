import "./Contact.css"
import Support from "../../components/support/support"
import Contactbackground from "../../components/contactbackground/contactbackground"
import Adress from "../../../public/assets/Vector (2).png"
import Phone from "../../../public/assets/bxs_phone.png"
import Time from "../../../public/assets/Vector (3).png"
import Form from "../../components/formcomponent/form"
function Contact (){

    return(
        <div> 
         <Contactbackground></Contactbackground>
        <div className="getintouchdiv">
            <h1 id="contacthead">Get In Touch With Us</h1>
            <p id="contactparagraph">For More Information About Our Product & Services.
            Please Feel Free To Drop Us An Email.<br></br> Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="main">
        <div className="formcontainer">
    <div className="repeateddiv">
<img src ={Adress}/>
<div className="formlabels">
    <h2>Address</h2>
    <label>236 5th SE Avenue, New York NY10000, United States</label>
</div>
    </div>
    <div className="repeateddiv">
<img src ={Phone}/>
<div   className="formlabels">
    <h2>Phone</h2>
    <label>Mobile: +(84) 546-6789
    Hotline: +(84) 456-6789</label>
</div>
    </div>
    <div className="repeateddiv">
<img src ={Time}/>
<div className="formlabels">
    <h2>Working Time</h2>
    <label>Monday-Friday: 9:00 - 22:00
    Saturday-Sunday: 9:00 - 21:00</label>
</div>
    </div>
</div>
    <Form></Form>
        </div>
        
            <Support></Support>
        </div>
    )
}
export default Contact