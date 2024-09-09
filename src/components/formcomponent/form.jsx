import { useState } from "react";
import "./form.css"
import * as yup from "yup"


function form (){
    const [formdata,setformdata]=useState({
        yourname:"",
        email:"",
        subject:"",
        message:"",
    })

    const userSchema = yup.object().shape({
        yourname:yup.string().min(4),
        email:yup.string().email(),
        subject:yup.string(),
        message:yup.string(),
    })

   async function testValidation(){
   const isValidform =await userSchema.isValid(formdata);
   console.log(isValidform);
   
    }
function OnHandleSubmit(event){
    console.log(formdata)
    event.preventDefault();
    testValidation()
    
}
function onHandleChange(event){
const value =(event.target.value);
const key = (event.target.name);

setformdata({
...formdata,
[key]: value,
})

}
    return(
<form onSubmit={OnHandleSubmit} className="formmaindiv">
    <label htmlFor="yourname">Your name</label>
    <input required  id="yourname" name="yourname" onChange={onHandleChange} value={formdata.yourname} placeholder="Abc"></input>
    
    <label htmlFor="email">Email address</label>
    <input required id="email" name="email" value={formdata.email} onChange={onHandleChange} placeholder="Abc@def.com"></input>
    
    <label htmlFor="subject">Subject</label>
    <input id="subject" name="subject" value={formdata.subject} onChange={onHandleChange} placeholder="This is an optional"></input>

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" value={formdata.message} onChange={onHandleChange} placeholder="Hi! i’d like to ask about"></textarea>

    <button id="submitbtn">Submit</button>

</form>
    )
}
export default form