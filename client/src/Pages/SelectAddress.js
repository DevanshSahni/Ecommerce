import React, { useState } from "react";
import "../CSS/selectAddress.css";
import { Link } from "react-router-dom";

const SelectAddress = () => {
  const [selected, setSelected] = useState(-1);

  const addressBook = [
    {
      name: "Home",
      street: "Mahavir Nagar",
      city: "Delhi",
      state: "New Delhi",
      country: "India",
      postalCode: 110018,
    },
    {
      name: "Office",
      street: "Cyber city",
      city: "Gurgram",
      state: "Haryana",
      country: "India",
      postalCode: 110057,
    },
  ];

  return (
    <div className="selectAddress">
      <h1 className="selectAddressHeading">Select Address</h1>

      {addressBook.map((address, idx) => {
        return (
          <AddressContainer
            idx={idx}
            setSelected={setSelected}
            selected={selected}
            name={address.name}
            street={address.street}
            city={address.city}
            state={address.state}
            country={address.country}
            postalCode={address.postalCode}
          />
        );
      })}

      <div className="selectAddressFooter">
        <Link to="/new-address">
          <button className="selectAddressFooterAddButton" type="submit">
            Add new address
          </button>
        </Link>
        <Link to="/explore">
          <button className="selectAddressFooterProceedButton" type="submit" disabled={selected==-1}>
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SelectAddress;

const AddressContainer = ({
  idx,
  setSelected,
  selected,
  name,
  state,
  city,
  postalCode,
  Country,
  street,
}) => {
  console.log(idx);
  return (
    <div
      className="addressContainer"
      onClick={() => setSelected(idx)}
      style={{ outline: idx === selected ? "2px solid #3498d8" : "none" }}
    >
      <h3 className="addressContainerHeading">
        ({idx + 1}) {name.toUpperCase()}:{" "}
      </h3>
      <h4 className="addressContainerContent">
        {street}, {city}, {state}, {postalCode}{" "}
      </h4>
    </div>
  );
};
