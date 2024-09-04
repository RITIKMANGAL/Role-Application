// src/App.jsx
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import EditorDashboard from './components/EditorDashboard';
import ViewerDashboard from './components/ViewerDashboard';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      <header className="navbar">
        <h1>Role-Based Application</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/editor">Editor</Link></li>
          <li><Link to="/viewer">Viewer</Link></li>
        </ul>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/editor" element={<EditorDashboard />} />
          <Route path="/viewer" element={<ViewerDashboard />} />
          <Route path="/" element={<div>Welcome to the Role-Based Application!</div>} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Role-Based Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
