import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';

export default function App() {
  return (
    <div>
      <ChatEngine 
        height="100vh"
        projectID="86ce28af-f14e-4993-b25b-fd49daef9ed0"
        userName="jsmith"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}