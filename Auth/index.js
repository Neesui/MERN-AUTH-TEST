import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
import authRoutes from './routes/authRoutes.js'
dotenv.config();           

const app = express();     

app.use(express.json());   

app.use("/api/auth",authRoutes)

// Connect to MongoDB
dbConnect()

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
