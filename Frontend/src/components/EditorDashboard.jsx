// src/components/EditorDashboard.js
import React, { useState } from 'react';
import axios from 'axios';
import './EditorDashboard.css';

const EditorDashboard = () => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleContentSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/content',
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Content created/updated successfully!');
      setContent('');
    } catch (error) {
      console.error('Error creating/updating content:', error);
    }
  };

  return (
    <div>
      <h1>Editor Dashboard</h1>
      <form onSubmit={handleContentSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content here"
        ></textarea>
        <button type="submit">Submit Content</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditorDashboard;
