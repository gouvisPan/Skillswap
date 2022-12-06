import React from "react";
import Menteeship from "../../../model/Menteeship";
import './MenteeItem.scss'
const MenteeItem: React.FC<{ menteeship: Menteeship }> = (props) => {
  return <div className="item-container">
    <h4>{props.menteeship.name}</h4>
  </div>;
};

export default MenteeItem;
