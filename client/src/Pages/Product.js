import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import "../CSS/product.css";
import { GrCart } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Product = () => {
  const { productID } = useParams();
  const [units, setUnits] = useState(1);
  let productInfo = data.filter((product) => product.name === productID);
  productInfo = productInfo[0];

  const productToCart = () => {
    // Backend call to add to cart
  };

  return (
    <div className="product">
      <div className="productImageSection">
        <img className="productImage" src={productInfo.imageSrc} alt="" />
      </div>
      <div className="productDetails">
        <h2>Name: {productInfo.name}</h2>
        <h2 className="productDetailsPrice">
          Price: <BiRupee />
          {productInfo.price}
        </h2>
        <h2>Artist: {productInfo.artist} </h2>
        <h2 className="productDetailsQuantity">
          Quantity: &nbsp;
          <CiCircleMinus
            className="productDetailsQuantityIcons"
            onClick={() => {
              if (units > 1) setUnits(units - 1);
            }}
          />
          &nbsp;
          {units} &nbsp;
          <CiCirclePlus
            className="productDetailsQuantityIcons"
            onClick={() => {
              setUnits(units + 1);
            }}
          />
        </h2>
        <Link to="/cart">
          <button
            className="productDetailsAddToCartBtn"
            onClick={productToCart}
          >
            Add to Cart <GrCart />
          </button>
        </Link>
        <h2>Description: {productInfo.imageDescription}</h2>
      </div>
    </div>
  );
};

export default Product;
