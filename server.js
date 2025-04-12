// File: server.js

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// File storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Ensure upload directory exists
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

// API Routes
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No image uploaded" });
  return res.json({ message: "Upload successful", path: `/uploads/${req.file.filename}` });
});

// Simulate reel generation
app.post("/generate-reel", (req, res) => {
  const { imagePath, music, filter, background } = req.body;

  // Simulate basic validation
  if (!imagePath || !music || !filter || !background) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Simulate processing delay and response
  setTimeout(() => {
    res.json({
      success: true,
      reelUrl: `https://dummyreelsite.com/reel/${Date.now()}`,
      message: "Reel generated (simulated)"
    });
  }, 2000);
});

app.listen(PORT, () => console.log(`Backend server running at http://localhost:${PORT}`));
