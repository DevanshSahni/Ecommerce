import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/newAddress.css";

const NewAddress = () => {
  const [location, setLocation] = useState("");
  return (
    <div className="newAddress">
      <h1 className="newAddressHeading">Shipping Info</h1>
      <div className="newAddressInputDetails">
        <input
          className="newAddressInput newAddressStreet"
          type="text"
          placeholder="Street Address"
        />
        <input
          className="newAddressInput"
          type="text"
          placeholder="City"
        />
        <input
          className="newAddressInput"
          type="text"
          placeholder="State"
        />
        <input
          className="newAddressInput"
          type="text"
          placeholder="Postal code"
        />
        <input
          className="newAddressInput"
          type="text"
          placeholder="Country"
        />
        <div className="newAddressLocation">
          <h3 className="newAddressLocationHeading">Save address as:</h3>
          <div>
            <input
              type="radio"
              name="addressLocation"
              id="addressHome"
              value="Home"
              onClick={(e) => {
                setLocation(e.target.value);
              }}
            />
            <label htmlFor="addressHome">Home</label>
          </div>
          <div>
            <input
              type="radio"
              name="addressLocation"
              id="addressOffice"
              value="Office"
              onClick={(e) => {
                setLocation(e.target.value);
              }}
            />
            <label htmlFor="addressOffice">Office</label>
          </div>
          <div>
            <input
              type="radio"
              name="addressLocation"
              id="addressOther"
              value="Other"
              onClick={(e) => {
                setLocation(e.target.value);
              }}
            />
            <label htmlFor="addressOther">Other</label>
          </div>
        </div>
        <input
          disabled={location != "Other"}
          placeholder="Location name"
          type="text"
          className="newAddressInput newAddressInputOtherLocation"
        />

        <div className="newAddressFooter">
        <button className="newAddressSubmitButton" type="submit">
          <Link to="/select-address">Save address</Link>
        </button></div>
      </div>
    </div>
  );
};

export default NewAddress;
