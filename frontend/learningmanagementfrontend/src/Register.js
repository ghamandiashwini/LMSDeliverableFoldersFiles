import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { userno1 } = useParams();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userno, setUserno] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { username, password, userno, role,email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Registration failed: ' + error.response.data.error);
    }
  };

  const handleback = async () => {
    navigate(`/AdminDashoard/${userno1}`);
 };


  return (
    <div>
      <button onClick={handleback}>Back</button>    
      <h2>Register Users</h2>
     <div><input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /></div> 
     <div> <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /></div> 
     <div><input type="text" placeholder="userno" onChange={(e) => setUserno(e.target.value)} /></div> 
     <div><input type="text" placeholder="role" onChange={(e) => setRole(e.target.value)} /></div> 
     <div><input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} /></div> 
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default Register;