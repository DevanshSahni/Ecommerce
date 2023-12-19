import React, { useEffect, useState } from "react";
import "../CSS/cart.css";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { BiRupee } from "react-icons/bi";
import { GrCart } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { getData, postData } from "../Utils/api";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [items, setitems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const totalPrice = items.reduce((acc, prod) => {
      return acc + prod.product.price * prod.quantity;
    }, 0);
    setTotal(totalPrice);
  }, [items]);

  useEffect(() => {
    const getItems = async () => {
      const { data, status } = await getData("cart");
      if (status === 401) {
        navigate("/login");
      } else setitems(data);
    };
    getItems();
  }, []);

  return (
    <div className="cart">
      <h1 className="cartHeading">Your Cart</h1>
      {items && items.length === 0 ? (
        <h4>
          No products added to cart. <Link to="/explore">Explore</Link>
        </h4>
      ) : (
        <>
          <div className="cartProduct cartProductHeading">
            <h3 className="cartProductHeadingImage">Image</h3>
            <h3 className="cartProductName">Name</h3>
            <h3 className="cartProductQuantity">Quantity</h3>
            <h3 className="cartProductPrice">Price</h3>
          </div>
          {items.map((product, idx) => {
            return (
              <CartProduct
                key={product.product._id}
                name={product.product.name}
                price={product.product.price}
                quantity={product.quantity}
                image={product.product.photourl}
                artist={product.product.artist}
                total={total}
                setTotal={setTotal}
                setitems={setitems}
                items={items}
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
        </>
      )}
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
  setitems,
  items
}) => {
  const [units, setUnits] = useState(quantity);
  useEffect(() => {
    const productToCart = async () => {
      const { data, status } = await postData("addCart", {
        productName: name,
        units,
      });
      if(units===0) setitems(items.filter(item=>item.product.name!==name))
    };
    productToCart();
  }, [units]);

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
          setTotal(total - units * price);
          setUnits(()=>0);
        }}
      />
    </div>
  );
};

export default Cart;
