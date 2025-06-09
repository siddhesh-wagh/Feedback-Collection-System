import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '15px' }}>Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
