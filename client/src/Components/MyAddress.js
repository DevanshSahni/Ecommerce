import React from "react";
import { Link } from "react-router-dom";

const MyAddress = () => {
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
    <div className="accountSection">
      <h1 className="accountHeading"> My address</h1>

      {addressBook.map((address, idx) => {
        return (
          <AddressContainer
            idx={idx}
            name={address.name}
            street={address.street}
            city={address.city}
            state={address.state}
            country={address.country}
            postalCode={address.postalCode}
          />
        );
      })}
      <div className="accountAddressFooter">
      <Link to="/new-address">
        <button className="accountAddressFooterAddButton" type="submit">
          Add new address
        </button>
      </Link>
      </div>
    </div>
  );
};

const AddressContainer = ({
  idx,
  name,
  state,
  city,
  postalCode,
  Country,
  street,
}) => {
  return (
    <div className="addressContainer">
      <h3 className="addressContainerHeading">
        ({idx + 1}) {name.toUpperCase()}:{" "}
      </h3>
      <h4 className="addressContainerContent">
        {street}, {city}, {state}, {postalCode}{" "}
      </h4>
      <h4 className="addressContainerContent">
        <button className="accountAddressButton" onClick={() => {}}>
          Edit
        </button>{" "}
        |{" "}
        <button className="accountAddressButton" onClick={() => {}}>
          Delete
        </button>
      </h4>
    </div>
  );
};

export default MyAddress;
