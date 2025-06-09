import React, { useState } from 'react';
import { signupUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirm) {
      setError('Passwords do not match!');
      return;
    }
    try {
      await signupUser(email, password);  // removed 'data' since unused
      alert('Signup successful! You can now login.');
      navigate('/login');  // redirect to login page
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
      <h2>Signup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Email:</label><br />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label><br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Confirm Password:</label><br />
        <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required />
      </div>
      <button type="submit" style={{ marginTop: 10 }}>Signup</button>
    </form>
  );
}
