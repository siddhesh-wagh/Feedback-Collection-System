import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: 20, background: '#eee' }}>
      <NavLink to="/" style={{ marginRight: 10 }}>Home</NavLink>
      <NavLink to="/signup" style={{ marginRight: 10 }}>Signup</NavLink>
      <NavLink to="/login" style={{ marginRight: 10 }}>Login</NavLink>
      <NavLink to="/form-builder" style={{ marginRight: 10 }}>Form Builder</NavLink>
    </nav>
  );
}
