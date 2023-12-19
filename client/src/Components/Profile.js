import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, postData } from "../Utils/api";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getInfo = async () => {
      const { data, status } = await getData("userInformation");
      if (status === 401) {
        navigate("/login");
      }
      setName(data.name);
      setEmail(data.email);
      setPhone(data.number);
    };
    getInfo();
  }, []);

  const handleEdit = async () => {
    if (edit) {
      const { status } = await postData("updateUser", {
        name,
        email,
        number: phone,
      });
      if (status === 401) {
        navigate("/login");
      }
    }
    setEdit(!edit);
  };

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
            onChange={(e) =>
              e.target.value.length <= 10 ? setPhone(e.target.value) : null
            }
            disabled={!edit}
          />
        </div>
      </div>

      <button className="profileEditButton" onClick={() => handleEdit()}>
        {edit ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Profile;
