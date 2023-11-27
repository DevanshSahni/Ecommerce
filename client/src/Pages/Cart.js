import React, { useEffect, useState } from "react";
import "../CSS/cart.css";
import data from "../data.json";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { BiRupee } from "react-icons/bi";
import { GrCart } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";

const Cart = () => {
  const temp = data.reduce((acc, prod) => {
    return acc + prod.price * prod.quantity;
  }, 0);
  const [total, setTotal] = useState(temp);

  return (
    <div className="cart">
      <h1 className="cartHeading">Your Cart</h1>
      <div className="cartProduct cartProductHeading">
        <h3 className="cartProductHeadingImage">Image</h3>
        <h3 className="cartProductName">Name</h3>
        <h3 className="cartProductQuantity">Quantity</h3>
        <h3 className="cartProductPrice">Price</h3>
      </div>
      {data.map((product, idx) => {
        return (
          <CartProduct
            key={idx}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            image={product.imageSrc}
            artist={product.artist}
            total={total}
            setTotal={setTotal}
          />
        );
      })}
      <div className="cartFooter">
        <h3 className="cartFooterAmount">
          SubTotal: <BiRupee />
          {total.toLocaleString("en-In")}
        </h3>
        <Link to={"/select-address"}>
          <button className="cartFooterCheckoutIcon">
            Checkout <GrCart />
          </button>
        </Link>
      </div>
    </div>
  );
};

const CartProduct = ({
  name,
  price,
  quantity,
  image,
  artist,
  total,
  setTotal,
}) => {
  const [units, setUnits] = useState(quantity);

  return (
    <div className="cartProduct">
      <Link to={`/product/${name}`}>
        <img className="cartProductImage" src={image} alt="Product" />
      </Link>

      <h3 className="cartProductName">
        {name} <h6 className="cartProductArtist">By {artist}</h6>
      </h3>

      <h3 className="cartProductQuantity">
        <CiSquareMinus
          className="cartProductQuantityIcons"
          onClick={() => {
            if (units > 1) {
              setUnits(units - 1);
              setTotal(total - price);
            }
          }}
        />
        &nbsp; {units} &nbsp;
        <CiSquarePlus
          className="cartProductQuantityIcons"
          onClick={() => {
            setUnits(units + 1);
            setTotal(total + price);
          }}
        />
      </h3>
      <h3 className="cartProductPrice">
        <BiRupee />
        {price}
      </h3>
      <GiCancel
        className="cartProductCancelIcon"
        onClick={() => {
          setUnits(0);
          setTotal(total - units * price);
        }}
      />
    </div>
  );
};

export default Cart;
