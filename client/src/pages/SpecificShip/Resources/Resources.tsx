import React from "react";
import Resource from "../../../model/Resource";
import ResourceItem from "./ResourceItem";
import { RiAddBoxLine } from "react-icons/ri";
interface ResourceProps {
  resources: Resource[];
  mentorship: Boolean;
}
const Resources: React.FC<ResourceProps> = (props) => {
  const resources = props.resources;

  return (
    <div className="resources">
      <h1>Learning Resources</h1>
      <div className="resources__list">
        {resources &&
          resources.length > 0 &&
          resources.map((r) => <ResourceItem resource={r} />)}
        <div className="resources__list--add">
          <h3>Add resource</h3>
          <RiAddBoxLine />{" "}
        </div>
      </div>
    </div>
  );
};

export default Resources;
