const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config(); // Load environment variables
require("./auth/passportConfig");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;
console.log("MongoDB URI:", mongoURI);
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use(express.json());
app.use("/api", authRoutes);

// Start server
const PORT = process.env.PORT || 3000; // Changed port number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
