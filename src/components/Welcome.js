import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate(); // Use navigate to route programmatically
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage

  // Check if the user is authenticated (i.e., token exists)
  if (!token) {
    // If no token, redirect to the login page
    navigate('/login');
    return null; // Return nothing to avoid rendering the page
  }

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    navigate('/'); // Redirect to login page
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Dashboard</h1>
      <p>Congratulations! You have successfully logged in.</p>

      {/* Display more personalized content here */}
      <div>
        <p>Your login was successful. You can now access the dashboard features.</p>
      </div>

      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
};

export default Welcome;
