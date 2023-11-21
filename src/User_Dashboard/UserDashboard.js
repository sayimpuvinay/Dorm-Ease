import React from 'react';
import AuthContext from '../Authentication/AuthContext';

const UserDashboard = () => {
  return (
    <div>
      {/* Make sure UserDashboard is rendered within the context of the Router */}
      <AuthContext />
      {/* Other UserDashboard content */}
    </div>
  );
};

export default UserDashboard;
