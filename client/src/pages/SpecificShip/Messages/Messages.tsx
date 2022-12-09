import React from "react";
import "./Messages.scss";
import { conversation } from "../../../model/data/users";
import MessageC from "./Message/MessageC";
import { IoIosSend } from "react-icons/io";

const Messages: React.FC<{ mentorship: Boolean }> = (props) => {
  return (
    <div className="messages-container">
      <div className="conversation-container">
        {conversation.map((message) => {
          return <MessageC message={message} />;
        })}
      </div>
      <div className="input-container">
        <input placeholder="type . . ." />
        <IoIosSend className="input-container__icon" />
      </div>
    </div>
  );
};

export default Messages;
