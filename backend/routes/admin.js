import express from 'express'
const router = express.Router();
import {authenticateToken} from '../middlewares/auth.js';
import { authorizeRole } from '../middlewares/auth.js';
import User from '../models/User.js'

// Get all users (only accessible by admin)
router.get('/users', authenticateToken, authorizeRole('admin'), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

module.exports = router;
