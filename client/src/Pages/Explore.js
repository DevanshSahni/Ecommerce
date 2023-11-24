import React, { useState } from "react";
import "../CSS/explore.css";
import originalData from "../data.json";
import Preview from "../Components/Preview";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { FaSortAmountUpAlt, FaStar, FaSortAmountUp } from "react-icons/fa";

const Explore = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([...originalData]);
  const [query, setQuery] = useState("");

  const inc = () => {
    data.sort((a, b) => a.price - b.price);
    setOpen(!open);
  };
  const dec = () => {
    data.sort((b, a) => a.price - b.price);
    setOpen(!open);
  };
  const pop = () => {
    setData([...originalData]);
    setOpen(!open);
  };

  const searchArtwork = (e) => {
    setQuery(e.target.value);
    const ImediateQuery = e.target.value;
    const updatedData = [...originalData].filter((product) =>
      product.name.toLowerCase().includes(ImediateQuery.toLowerCase())
    );
    setData(updatedData);
  };

  return (
    <div className="explore">
      <div className="exploreSearchBar">
        <input type="text" value={query} onChange={searchArtwork} />
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
        <h6 onClick={pop}>
          <FaStar /> Sort by popularity
        </h6>
      </div>

      <div className="exploreArtworks">
        {data.map((product, idx) => (
          <Preview
            key={idx}
            name={product.name}
            price={product.price}
            artist={product.artist}
            image={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
