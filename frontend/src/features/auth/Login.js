import React, { useState } from 'react';
import { loginUser } from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      alert('Login successful! Token: ' + data.token);
      // TODO: Save token, redirect user
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
      <h2>Login</h2>
      {error && <p style={{color:'red'}}>{error}</p>}
      <div>
        <label>Email:</label><br />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label><br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <button type="submit" style={{ marginTop: 10 }}>Login</button>
    </form>
  );
}
