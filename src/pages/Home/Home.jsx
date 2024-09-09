 import "./Home.css"
 import Support from "../../components/support/support"
import Homebackground from "../../components/homebackground/homebackground"
import { Link} from "react-router-dom";
import electronic from "/assets/electronics_category_150x200.png"
import jewelery from "../../../public/assets/jewelry_category_150x200.png"
import men from "../../../public/assets/men_clothing_150x200.png"
import women from "../../../public/assets/women_clothing_150x200.png"
import { useNavigate } from "react-router-dom";


const Home = ({ setSelectedCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate("/shop");
  };

    return(
        <>
<Homebackground></Homebackground>
<div className="contain">
<h1 id="categoryhead">   Categories  </h1>
<div className="category-container">
  <div className="category-card" onClick={() => handleCategoryClick("electronics")}>
    <img src={electronic}/>
        <h3 className="categoriesimg">Electronics</h3>
      </div>
      
      <div className="category-card" onClick={() => handleCategoryClick("jewelery")}>
        <img src={jewelery}/>
        <h3>Jewelery</h3>
      </div>
      <div className="category-card" onClick={() => handleCategoryClick("men's clothing")}>
      <img src={men}/>
        <h3>Men's Clothing</h3>
      </div>
      <div className="category-card" onClick={() => handleCategoryClick("women's clothing")}>
      <img src={women}/>
        <h3>Women's Clothing</h3>
      </div>
    </div>
    </div>
<Support></Support>  
        </>
      
    )
}
export default Home