import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

export default function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;
  console.log({ props });
  console.log({ chats, activeChat, userName, messages });

  const chat = chats && chats[activeChat];
  console.log({ chat });

  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map((person, index) => {
      return (
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{ float: isMyMessage ? "right" : "left" }}
          >
            {person.person.username}
          </div>
        )
      );
    });
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "75px" : "0px",
              marginLeft: isMyMessage ? "0px" : "40px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading...";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">
          {chat.title}
          <div className="chat-subtitle">
            {chat.people.map((person) => ` ${person.person.username}`)}
          </div>
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: 100 }}></div>
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}
