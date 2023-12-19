import React, { useEffect, useState } from "react";
import "../CSS/explore.css";
import Preview from "../Components/Preview";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { FaSortAmountUpAlt, FaStar, FaSortAmountUp } from "react-icons/fa";
import { getData } from "../Utils/api";

const Explore = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getData("products");
      setOriginalData([...data]);
      setData([...data]);
    };
    getProducts();
  }, []);

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
    const ImmediateQuery = e.target.value;
    const updatedData = [...originalData].filter(
      (product) =>
        product.name.toLowerCase().includes(ImmediateQuery.toLowerCase()) ||
        product.artist.toLowerCase().includes(ImmediateQuery.toLowerCase())
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
            image={product.photourl}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
