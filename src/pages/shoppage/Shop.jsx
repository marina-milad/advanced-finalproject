import "./shop.css"
import React, { useEffect, useState } from "react";
import Shopbackground from "../../components/shopbackground/shopbackground.jsx"
import Support from "../../components/support/support.jsx"
import { Link } from "react-router-dom";


const ShopPage = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filteredProducts = selectedCategory
  ? products.filter((product) => product.category === selectedCategory)
  : products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (<>
   <Shopbackground></Shopbackground>
     <div className="productbox">
      {currentProducts.map((product) => (  <Link 
            key={products.id} 
            to={`/product/${product.id}`} 
          >
          <div key={product.id} className="product-card">
            <img  id="card-img"  src={product.image} alt={product.title} />
            <h3 className="card-h3">{product.title}</h3>
            <p>{product.price} USD</p>
            <div className="product-card-overlay">
    <button >Product Details</button>
  </div>
          </div>
          </Link>
        ))}
      </div>
<div className="paginationdiv">
{Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
  {currentPage < totalPages && (
          <button onClick={() => paginate(currentPage + 1)}>Next</button>
        )}
  {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)}>Previous</button>
        )}
</div>
    <Support></Support>
  </>
  );
};

export default ShopPage;




















           
            
   
           
      
  