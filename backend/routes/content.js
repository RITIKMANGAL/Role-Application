import express from 'express'
const router = express.Router();
import { authenticateToken } from '../middlewares/auth.js';
import { authorizeRole } from '../middlewares/auth.js';

let content = []; // Sample in-memory content storage

// Create or update content (only accessible by editor)
router.post('/', authenticateToken, authorizeRole('editor'), (req, res) => {
  content.push(req.body.content);
  res.send('Content created/updated successfully!');
});

// Fetch content (accessible by viewer)
router.get('/', authenticateToken, authorizeRole('viewer'), (req, res) => {
  res.json(content);
});

module.exports = router;
