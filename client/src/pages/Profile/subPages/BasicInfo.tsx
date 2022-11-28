import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { userActions } from "../../../store/reducers/userSlice";
import "./BasicInfo.scss";

const BasicInfo = () => {
  const user = useAppSelector(state => state.user.data);
  return (
    <div className="basic-info-container">
      <h3>Basic Info</h3>
      <input placeholder={user!.name} />
      <input placeholder={user!.slogan || "Insert your slogan here!"} />
      <select>
        <option>English</option>
      </select>
      <textarea placeholder={user!.bio}></textarea>
      <button>Save</button>
    </div>
  );
};

export default BasicInfo;
