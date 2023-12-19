import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/newAddress.css";
import { postData } from "../Utils/api";

const NewAddress = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [address, setAddress] = useState(
    location.state
      ? location.state
      : {
          name: "",
          street: "",
          city: "",
          state: "",
          country: "",
          postalCode: "",
        }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, status } = await postData("saveUserAddress", address);
    if (status === 401) navigate("/login");
    navigate(-1);
  };

  return (
    <div className="newAddress">
      <h1 className="newAddressHeading">Shipping Info</h1>
      <form className="newAddressInputDetails" onSubmit={handleSubmit}>
        <input
          className="newAddressInput newAddressStreet"
          type="text"
          required
          placeholder="Street Address"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
        <input
          className="newAddressInput"
          type="text"
          required
          placeholder="City"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
        <input
          className="newAddressInput"
          required
          type="text"
          placeholder="State"
          value={address.state}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
        />
        <input
          className="newAddressInput"
          required
          type="text"
          placeholder="Postal code"
          value={address.postalCode}
          onChange={(e) =>
            setAddress({ ...address, postalCode: e.target.value })
          }
        />
        <input
          className="newAddressInput"
          required
          type="text"
          placeholder="Country"
          value={address.country}
          onChange={(e) => setAddress({ ...address, country: e.target.value })}
        />
        <div className="newAddressLocation">
          <h3 className="newAddressLocationHeading">Save address as:</h3>
          <div>
            <input
              type="radio"
              name="addressLocation"
              required
              id="addressHome"
              value="Home"
              checked={address.name === "Home"}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
            />
            <label htmlFor="addressHome">Home</label>
          </div>
          <div>
            <input
              type="radio"
              required
              name="addressLocation"
              id="addressOffice"
              value="Office"
              checked={address.name === "Office"}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
            />
            <label htmlFor="addressOffice">Office</label>
          </div>
          <div>
            <input
              required
              type="radio"
              name="addressLocation"
              id="addressOther"
              value="Other"
              checked={
                address.name !== "" &&
                address.name !== "Home" &&
                address.name !== "Office"
              }
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
            />
            <label htmlFor="addressOther">Other</label>
          </div>
        </div>
        <input
          disabled={
            address.name == "" ||
            address.name == "Home" ||
            address.name == "Office"
          }
          placeholder="Location name"
          type="text"
          className="newAddressInput newAddressInputOtherLocation"
          value={address.name}
          onChange={(e) => setAddress({ ...address, name: e.target.value })}
        />

        <div className="newAddressFooter">
          <button className="newAddressSubmitButton" type="submit">
            Save address
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAddress;
