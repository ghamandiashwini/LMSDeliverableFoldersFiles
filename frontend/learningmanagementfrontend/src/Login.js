import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { username, password});
      setMessage(`Welcome, ${response.data.user.username}!`);
      if(response.data.user.role === "admin"){
        navigate(`/AdminDashoard/${response.data.user.userno}`);
      }
      if(response.data.user.role === "student"){
        navigate(`/StudentDashboard/${response.data.user.userno}`);
      }

      if(response.data.user.role === "facilitator"){
        navigate(`/FacilitatorDashoard/${response.data.user.userno}`);
      }

    } catch (error) {
      setMessage('Login failed: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;