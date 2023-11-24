import React from "react";
import "../CSS/preview.css";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";

const Preview = ({ name, image, price, artist }) => {
  return (
    
    <div className="preview">
      <Link to={`/product/${name}`}>
      <div className="previewImage">
        <img src={image} alt="Product preview" />
      </div>
      <span className="previewDetails">
        <h5>Name: {name}</h5>
        <h6>Price: <BiRupee/>{price}</h6>
        <h6>Artist: {artist}</h6>
      </span>
      </Link>
    </div>
    
  );
};

export default Preview;
