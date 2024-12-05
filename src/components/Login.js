import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Initialize useNavigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('Username:', username);
    console.log('Password:', password);

    // Simulating an API request for JWT
    if (username === 'admin' && password === 'password') {
      console.log('Valid credentials');
      
      // Normally, you would get the token from an API
      const token = 'fake-jwt-token'; // Simulate token
      dispatch(login(token)); // Dispatch the token to Redux
      localStorage.setItem('token', token); // Save token to localStorage
      
      // Redirect to the welcome page
      navigate('./Welcome');  // Navigate to '/welcome'
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
