import React, { useState } from "react";
import "../CSS/explore.css";
import data from "../data.json";
import Product from "../Components/Product";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { FaSortAmountUpAlt, FaSortAmountUp } from "react-icons/fa";

const Explore = () => {
  const [open, setOpen] = useState(false);

  const inc = () => {
    data.sort((a, b) => a.price - b.price);
    setOpen(!open);
  };
  const dec = () => {
    data.sort((b, a) => a.price - b.price);
    setOpen(!open);
  };

  return (
    <div className="explore">
      <div className="exploreSearchBar">
        <input type="text" />
        <BsSearch className="exploreSearchBarIcon" />
      </div>

      <BsThreeDotsVertical
        className="exploreThreeDotsIcon"
        onClick={() => setOpen(!open)}
      />

      <div
        className="filterContainer"
        style={{ display: open ? "block" : "none" }}
      >
        <h6 onClick={dec}>
          <FaSortAmountUpAlt /> Sort by price
        </h6>
        <h6 onClick={inc}>
          <FaSortAmountUp /> Sort by price
        </h6>
      </div>

      <div className="exploreArtworks">
        {data.map((product, idx) => (
          <Product
            key={idx}
            name={product.name}
            price={product.price}
            artist={product.Artist}
            image={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
