import { SendOutlined } from "@ant-design/icons";
import { PictureOutlined } from "@ant-design/icons/lib/icons";
import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

export default function MessageForm(props) {
  const { chatId, creds } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    text.length > 0 && sendMessage(creds, chatId, { text });
    setValue("");
  };

  const handleChange = ({ target }) => {
    setValue(target.value);
    isTyping(props, chatId);
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button type="submit" className="send-button">
        <SendOutlined />
      </button>
    </form>
  );
}
