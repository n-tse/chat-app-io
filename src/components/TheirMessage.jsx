import React from "react";

export default function TheirMessage({ lastMessage, message }) {
  return (
    <div className="message-row">
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message attachment"
          className="message-image"
          style={{ marginLeft: 20 }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: 20
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
