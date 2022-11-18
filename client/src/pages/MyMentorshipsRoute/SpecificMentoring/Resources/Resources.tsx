import React from "react";
import Resource from "../../../../model/Resource";
import ResourceItem from "./ResourceItem";

const Resources: React.FC<{ resources: Resource[] }> = (props) => {
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
