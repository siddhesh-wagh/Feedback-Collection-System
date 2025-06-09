import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import FormBuilder from './features/feedback/FormBuilder';


function Home() {
  return <h2>Welcome to Feedback Collection System</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/form-builder" element={<FormBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
