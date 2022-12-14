import React from "react";
import Resource from "../../../model/Resource";
import "./Resources.scss";

const ResourceItem: React.FC<{ resource: Resource }> = (props) => {
  return (
    <div className="resource-item">
      <h3>{props.resource.name}</h3>
      <a href={props.resource.link} target="blank">
        <h2>{props.resource.link}</h2>
      </a>
    </div>
  );
};

export default ResourceItem;
