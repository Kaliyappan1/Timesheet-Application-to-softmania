import express from 'express';
import { } from 'dotenv/config';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import formRoutes from './routes/formRoutes.js'
import teamRoutes from './routes/teamRoutes.js'
import reportRoutes from './routes/reportRoutes.js';
import cors from 'cors'
import job from "./cron/cron.js";
job.start();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(cors( ));

// Routes
app.use('/api', authRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/reports', reportRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});