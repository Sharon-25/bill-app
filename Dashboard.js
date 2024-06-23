import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/billing">Billing</Link>
    </div>
  );
}

export default Dashboard;
