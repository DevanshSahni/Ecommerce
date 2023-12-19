import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData, postData } from "../Utils/api";

const MyAddress = () => {
  const [addressBook, setAddressBook] = useState([]);

  useEffect(() => {
    const getAddress = async () => {
      const { data, status } = await getData("userAddresses");
      setAddressBook(data.addressess);
    };
    getAddress();
  }, []);

  return (
    <div className="accountSection">
      <h1 className="accountHeading"> My address</h1>

      {addressBook.map((address, idx) => {
        return (
          <AddressContainer
            key={address._id}
            idx={idx}
            setAddressBook={setAddressBook}
            address={address}
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

const AddressContainer = ({ idx, setAddressBook, address }) => {
  const handleDelete = async (id) => {
    const { data, status } = await postData("deleteAddress", { id });
    if (status === 200) {
      setAddressBook(data.newAddress);
    }
  };

  return (
    <div className="addressContainer">
      <h3 className="addressContainerHeading">
        ({idx + 1}) {address.name.toUpperCase()}{" "}
      </h3>
      <h4 className="addressContainerContent">
        {address.street}, {address.city}, {address.state}, {address.postalCode}{" "}
      </h4>
      <h4 className="addressContainerContent">
        <Link to="/new-address" state={address}>
          <button className="accountAddressButton">Edit</button>
        </Link>{" "}
        |{" "}
        <button
          className="accountAddressButton"
          onClick={() => handleDelete(address._id)}
        >
          Delete
        </button>
      </h4>
    </div>
  );
};

export default MyAddress;
