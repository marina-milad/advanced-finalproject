
import "./supportdiv.css"
function Supportdiv (props) {
    return(
<div className="supportdiv">
    <img  id="supportimg" src={props.img}/>
    <div className="supportlabels">
        <label> {props.firstlabel} </label>
        <label>  {props.secondlabel} </label>
    </div>
</div>

    )
}
export default Supportdiv