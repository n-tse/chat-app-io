import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

export default function App() {
  // if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
      {!localStorage.getItem("username") ? (
        <LoginForm />
      ) : (
        <ChatEngine
          height="100vh"
          projectID="86ce28af-f14e-4993-b25b-fd49daef9ed0"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem("password")}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
      )}
    </div>
  );
}
