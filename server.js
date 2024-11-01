const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
require("./auth/passportConfig");

const app = express();
app.use(cors());
app.use(express.json());

// Mongo Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/auth", require("./routes/authRoutes"));

// Start server
const PORT = process.env.PORT || 5001; // Changed port number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
