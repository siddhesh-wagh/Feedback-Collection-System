import React, { useState } from 'react';
import { signupUser } from '../../services/api';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirm) {
      setError('Passwords do not match!');
      return;
    }
    try {
      const data = await signupUser(email, password);
      alert('Signup successful! You can now login.');
      // TODO: redirect to login page
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
      <h2>Signup</h2>
      {error && <p style={{color:'red'}}>{error}</p>}
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
