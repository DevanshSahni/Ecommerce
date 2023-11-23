import React from "react";
import "../CSS/product.css";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";

const Product = ({ name, image, price, artist }) => {
  return (
    
    <div className="product">
      <Link to={`/product/${name}`}>
      <div className="productImage">
        <img src={image} alt="product" />
      </div>
      <span className="productDetails">
        <h5>Name: {name}</h5>
        <h6>Price: <BiRupee/>{price}</h6>
        <h6>Artist: {artist}</h6>
      </span>
      </Link>
    </div>
    
  );
};

export default Product;
