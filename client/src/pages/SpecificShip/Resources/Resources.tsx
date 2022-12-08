import React from "react";
import Resource from "../../../model/Resource";
import ResourceItem from "./ResourceItem";

interface ResourceProps {
  resources: Resource[];
  mentorship: Boolean;
}
const Resources: React.FC<ResourceProps> = (props) => {
  return (
    <div className="resources">
      <h1>Learning Resources</h1>
      <div className="resources__list">
        {props.resources.map((r) => (
          <ResourceItem resource={r} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
