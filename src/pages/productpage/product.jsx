import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useContext } from 'react';
import { CartContext } from "../../components/cartcontext/cartcontext"
import React from 'react';
import "./product.css"
import minus from "../../../public/assets/-.png"
import plus from "../../../public/assets/+.png"
import facebook from "../../../public/assets/akar-icons_facebook-fill.png"
import linkedin from "../../../public/assets/akar-icons_linkedin-box-fill.png"
import twitter from "../../../public/assets/ant-design_twitter-circle-filled.png"
import arrow from "../../../public/assets/dashicons_arrow-down-alt2.png"

const ProductDetailPage = () => {
  const {id} = useParams();
  const [myproduct, setmyProduct] = React.useState(null);
  const [CurrentPic,setCurrentPic]=useState(null);
  const [counter,setcounter ] =useState(0);
  const { addToCart } = useContext(CartContext);
  
  function Increment (){
    setcounter(counter+1);
        }
        function Decrement (){
            if(counter >0 ){
                setcounter(counter - 1);
            }
        }

  function handleOnClick(event){
  setCurrentPic(event.target.src);
  };

  const handleAddToCart = () => {
    if (counter > 0) {
      addToCart(myproduct, counter);
    }
  };
  const StarRating = ({ rating,ratingCount }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          {i <= rating ? "★" : "☆"}
        </span>
      );
    }
    return ( <div className='ratingdiv'>
<div className='yellowstars'>{stars}</div> :  
<p id='starparagraph'>{ratingCount} reviews</p>
    </div>) 
  };
  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setmyProduct(data);
        ;
        
        setCurrentPic(data.image);
      });
  }, [id]);

  if (!myproduct) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className='bigcontainer'>
    <div className='introdiv'>
      <p>Home </p>
      <img src={arrow}/> 
      <p> Shop </p>
      <img src={arrow}/>
      <p> {myproduct.title} </p>
    </div>
    <div className='productinfowrapper'>
      <div className="imagescontainer">
        <div className="fourimgs"> 
        <button onClick={handleOnClick}><img src={myproduct.image}></img></button>   
        <button  onClick={handleOnClick}><img src={myproduct.image}></img></button>   
        <button  onClick={handleOnClick}><img src={myproduct.image}></img></button>  
        <button  onClick={handleOnClick}><img src={myproduct.image}></img></button> 
        </div>
        <div className="mainimage">
          <img src={CurrentPic}></img> 
        </div>
        </div>


<div>
      <h1 className='producttitle'>{myproduct.title}</h1>
      <p className='productprice'>{myproduct.price}  USD</p>
      <div className="stars"> <StarRating   rating={myproduct?.rating?.rate || 0} 
      ratingCount={myproduct?.rating?.count || 0} />
      </div>
      <p> size </p>
      <div className="sizediv">
  <button> L </button>
  <button> XL </button>
  <button> XXL </button>
      </div>
      <div className='addtocartdiv'>
      <div id="buttondiv">
                <button onClick={Decrement}><img src={minus}/> </button>
                <label>{counter} </label>
                <button onClick={Increment}><img src={plus}/> </button>
            </div>
            <button id="cartbutton" onClick={handleAddToCart} > Add to cart </button>
      </div>
      <hr></hr>
      <p className='productcategory'> category : {myproduct.category}</p>
      <div className='sharediv'>
      <p>Share :</p>
      <img src={facebook}/> 
      <img src={linkedin}/> 
      <img src={twitter}/>
      </div>
    </div>
    </div>
    <hr></hr>
    <div className='descrdiv'>
      <p id='description'>Description</p>
      <p id='descinfo'> {myproduct.description} </p>
    </div>
    
    </div>
      );
}

export default ProductDetailPage;