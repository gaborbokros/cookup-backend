import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

// Env variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('[DATABASE] MongoDB connected'))
  .catch(err => console.error('[DATABASE] MongoDB connection error:', err));

// Default settings
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`[SERVER] Server is running (http://localhost:${PORT})`));