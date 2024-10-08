import Supportdiv from "../supportdiv/supportdiv"
import "./support.css"
import Quality from "/assets/Group (1).png"
import Warranty from "/assets/Vector (1).png"
import Shipping from "/assets/Group.png"
import Customer from "/assets/customer-support.png"

function Support (){
    const arrayofobjects=[{
        uniqueid:1,
        img: Quality ,
        firstlabel:"High Quality",
        secondlabel:"crafted from top materials"},
        { uniqueid:2,
        img:Warranty ,
        firstlabel:"Warranty Protection",
        secondlabel:"Over 2 years"},
        {uniqueid:3,
            img:Shipping ,
            firstlabel:"Free Shipping",
            secondlabel:"Order over 150 $"},
            {uniqueid:4,
                img:Customer,
                firstlabel:"24 / 7 Support",
                secondlabel:"Dedicated support"}]
    return(
<div className="supportcontiner">
   {arrayofobjects.map((item)=>{
    return(
        <Supportdiv
        key={item.uniqueid}
        img ={item.img}
        firstlabel ={item.firstlabel}
        secondlabel ={item.secondlabel}
        ></Supportdiv>
    )
   })}
</div>
    )
}
export default Support