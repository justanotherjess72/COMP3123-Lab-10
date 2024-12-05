import React from 'react';
import { useSelector } from 'react-redux';

const ProtectedData = () => {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    return <div>Please log in to access this data.</div>;
  }

  return <div>Protected data is displayed here!</div>;
};

export default ProtectedData;
