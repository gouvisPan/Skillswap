import React from "react";
import Menteeship from "../../../model/Menteeship";
import "./MenteeItem.scss";
import { useState } from "react";

const MenteeItem: React.FC<{ menteeship: Menteeship }> = (props) => {
  const [progress, setProgress] = useState(props.menteeship!.progress);

  return (
    <div
      className="item-container"
      style={{ width: `${progress}%`, minWidth: "20%" }}
    >
      <h4>{props.menteeship.ment.name}</h4>
    </div>
  );
};

export default MenteeItem;
