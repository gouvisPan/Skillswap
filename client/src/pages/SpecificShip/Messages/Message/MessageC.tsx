import React from "react";
import Message from "../../../../model/Message";
import "./MessageC.scss";
import { TiTick } from "react-icons/ti";
interface MessageProps {
  message: Message;
}

const MessageC: React.FC<MessageProps> = (props) => {
  const typeCss = props.message.isMentor ? "mentor" : "mentee";
  const time = props.message.timeSent;

  const formatedDate =
    (time.getDate === new Date().getDate
      ? "sent today"
      : time.getDate() +
        "-" +
        (time.getMonth() + 1) +
        "-" +
        time.getFullYear()) +
    " at " +
    time.getHours() +
    ":" +
    time.getMinutes();
  return (
    <div className={`message-container ${typeCss}`}>
      {props.message.isRead && <TiTick className={`${typeCss}__read`} />}
      <span className={`${typeCss}__time`}>{formatedDate}</span>
      <span>{props.message.text}</span>
    </div>
  );
};

export default MessageC;
