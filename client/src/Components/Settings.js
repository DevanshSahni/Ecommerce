import React from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../Utils/api";

const Settings = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const { data, status } = await getData("logout");
    if (status === 200) {
      navigate("/login");
    }
  };
  const handleDelete = async () => {
    const { data, status } = await getData("delete");
    if (status === 200) {
      navigate("/login");
    }
  };
  return (
    <div className="accountSection">
      <h1 className="accountHeading">Settings</h1>
      <div className="settingsMenu">
        <div className="settingsMenuItem">
          <h2 className="settingsMenuHeading">Change Password</h2>
          <h5 className="settingsMenuDescription">
            <span className="settingsMenuAction">Change password</span> <br />
            You would need your email and old password to create a new password.
          </h5>
        </div>
        <div className="settingsMenuItem">
          <h2 className="settingsMenuHeading">Logout</h2>
          <h5 className="settingsMenuDescription">
            <span className="settingsMenuAction" onClick={() => handleLogout()}>
              Logout
            </span>{" "}
            <br />
            This action will log you out from your current session on this
            device. You can log in again, and all your data will remain saved.{" "}
          </h5>
        </div>
        <div className="settingsMenuItem">
          <h2 className="settingsMenuHeading">Permanently delete account</h2>
          <h5 className="settingsMenuDescription">
            <span
              className="settingsMenuAction"
              onClick={() => handleDelete()}
              style={{ color: "#e74c3c" }}
            >
              Delete my account
            </span>{" "}
            <br />
            Deleting your account would mean you would loose all your saved
            addresses, order history, etc. <br />
            Are you sure?
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Settings;
