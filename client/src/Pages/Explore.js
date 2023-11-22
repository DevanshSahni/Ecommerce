import React from "react";
import "../CSS/explore.css";
import { BsSearch } from "react-icons/bs";
import data from "../data.json";
import Product from "../Components/Product";

const Explore = () => {
  return (
    <div className="explore">
      
      <div className="exploreSearchBar">
        <input type="text" />
        <BsSearch className="exploreSearchBarIcon"/>
      </div>

      <div className="exploreArtworks">
        <Product/>

      </div>
    </div>
  );
};

export default Explore;
