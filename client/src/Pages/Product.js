import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/product.css";
import { GrCart } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { postData } from "../Utils/api";

const Product = () => {
  const { productName } = useParams();
  const [units, setUnits] = useState(1);
  const [productInfo, setProductInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const { data, status } = await postData("productInfo", { productName });
      if (status === 401) navigate("/login");
      setProductInfo(data.product);
      setUnits(data.quantity);
    };
    getProduct();
  }, []);

  const productToCart = async () => {
    const { data, status } = await postData("addCart", { productName, units });
    if (status === 401) navigate("/login");
    else alert(data.message);
  };

  return (
    <div className="product">
      <div className="productImageSection">
        <img className="productImage" src={productInfo.photourl} alt="" />
      </div>
      <div className="productDetails">
        <h2>Name: {productInfo.name}</h2>
        <h2 className="productDetailsPrice">
          Price:&nbsp;
          <BiRupee />
          {productInfo.price}
        </h2>
        <h2>Artist: {productInfo.artist} </h2>
        <h2 className="productDetailsQuantity">
          Quantity: &nbsp;
          <CiSquareMinus
            className="productDetailsQuantityIcons"
            onClick={() => {
              if (units > 1) setUnits(units - 1);
            }}
          />
          &nbsp;
          {units} &nbsp;
          <CiSquarePlus
            className="productDetailsQuantityIcons"
            onClick={() => {
              setUnits(units + 1);
            }}
          />
        </h2>
        {/* <Link to="/cart"> */}
        <button className="productDetailsAddToCartBtn" onClick={productToCart}>
          Add to Cart <GrCart />
        </button>
        {/* </Link> */}
        <h2>Description: {productInfo.description}</h2>
      </div>
    </div>
  );
};

export default Product;
