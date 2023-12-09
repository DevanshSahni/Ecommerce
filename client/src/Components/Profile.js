import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Devansh");
  const [email, setEmail] = useState("devanshsahni123@gmail.com");
  const [phone, setPhone] = useState(8744810467);
  const [edit, setEdit] = useState(false);

  return (
    <div className="accountSection">
      <h1 className="accountHeading">Profile</h1>
      <div className="profileDetails">
        <div className="userInfo">
          <h2>Name:</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            disabled={!edit}
          />
        </div>
        <div className="userInfo">
          <h2>Email:</h2>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={!edit}
          />
        </div>
        <div className="userInfo">
          <h2>Phone Number:</h2>
          <input
            type="Number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            minLength={10}
            maxLength={10}
            disabled={!edit}
          />
        </div>
      </div>

      <button className="profileEditButton" onClick={() => setEdit(!edit)}>
        {edit ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Profile;
