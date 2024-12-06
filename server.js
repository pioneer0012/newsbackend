import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import newsRoutes from './routes/newsRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 
// Connect to MongoDB
connectDB();

// Routes
app.use('/api/news', newsRoutes);

// Start the server
const PORT = process.env.PORT || 5700;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
