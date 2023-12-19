import React, { useEffect, useState } from "react";
import "../CSS/selectAddress.css";
import { Link } from "react-router-dom";
import { getData } from "../Utils/api";

const SelectAddress = () => {
  const [selected, setSelected] = useState(-1);
  const [addressBook, setAddressBook] = useState([]);

  useEffect(() => {
    const getAddress = async () => {
      const { data, status } = await getData("userAddresses");
      setAddressBook(data.addressess);
    };
    getAddress();
  }, []);

  const handleSubmit = async()=>{
    // Place the order
  }

  return (
    <div className="selectAddress">
      <h1 className="selectAddressHeading">Select Address</h1>

      {addressBook.map((address, idx) => {
        return (
          <AddressContainer
            key={address._id}
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
          <button
            className="selectAddressFooterProceedButton"
            type="submit"
            disabled={selected == -1}
            onClick={handleSubmit()}
          >
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
