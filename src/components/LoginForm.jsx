import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObj = { 'Project-ID': "86ce28af-f14e-4993-b25b-fd49daef9ed0", 'User-Name': username, 'User-Secret': password}

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObj });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
    } catch (error) {
      setError("Invalid Username or Password");
    }
  }

  return (
    <div className='wrapper'>
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' value={username} onChange={({target}) => setUsername(target.value)} className="input" placeholder='Username' required />
          <input type='password' value={password} onChange={({target}) => setPassword(target.value)} className="input" placeholder='Password' required />
          <div align="center">
            <button type="submit" className='button'>
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  )
}