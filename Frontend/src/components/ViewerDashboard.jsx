// src/components/ViewerDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewerDashboard.css'

const ViewerDashboard = () => {
  const [content, setContent] = useState([]);

  // Fetch content when the component loads
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:5000/api/content', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContent(data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    fetchContent();
  }, []);

  return (
    <div>
      <h1>Viewer Dashboard</h1>
      <h2>Available Content</h2>
      {content.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewerDashboard;
