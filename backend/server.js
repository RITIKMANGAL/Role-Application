import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import { ENV_VARS } from './config/envVars.js';
import authRoutes from './routes/auth.js'
import adminRoutes from './routes/admin.js'
import contentRoutes from './routes/content.js'

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(ENV_VARS.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import routes
// Use routes
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api/content', contentRoutes);

const PORT = ENV_VARS.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
