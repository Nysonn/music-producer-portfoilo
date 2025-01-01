import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from 'pg';

const { Client } = pkg;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL Client configuration
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Database connection error:", err.message));

// API Endpoint to Fetch Sample Packs
app.get("/api/sample-packs", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM sample_packs");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching sample packs:", error.message);
    res.status(500).json({ error: "An error occurred while fetching sample packs." });
  }
});

// Start the server
const PORT = parseInt(process.env.PORT, 10) || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
