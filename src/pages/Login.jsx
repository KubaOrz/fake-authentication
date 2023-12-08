import React, { useState } from 'react';
import { AuthProvider } from '../auth/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const formStyle = {
  maxWidth: '300px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const labelStyle = {
  display: 'block',
  margin: '10px 0',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '8px 0',
  boxSizing: 'border-box',
};

const buttonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px 15px',
  margin: '15px 0',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted: ', { username, password });
    AuthProvider.signIn(username, password, (status) => {
      if (status === 'success') {
        navigate(location.state?.from ?? '/');
      } else {
        setUsername('');
        setPassword('');
        alert('Niepoprawne dane logowania');
      }
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Username:
          <input type="text" value={username} style={inputStyle} onChange={handleUsernameChange} />
        </label>
        <label style={labelStyle}>
          Password:
          <input type="password" value={password} style={inputStyle} onChange={handlePasswordChange} />
        </label>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
