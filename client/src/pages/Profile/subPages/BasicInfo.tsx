import React from "react";
import "./BasicInfo.scss";

const BasicInfo = () => {
  return (
    <div className="basic-info-container">
      <h3>Basic Info</h3>
      <input placeholder="First Name" />
      <input placeholder="Last Name" />
      <input placeholder="Slogan" />
      <select>
        <option>English</option>
      </select>
    </div>
  );
};

export default BasicInfo;
