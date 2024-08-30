const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js');
const formRoutes = require('./routes/formRoutes.js');
const teamRoutes = require('./routes/teamRoutes.js');
// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173'
}));


// Routes
app.use('/api', authRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/teams', teamRoutes);

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});