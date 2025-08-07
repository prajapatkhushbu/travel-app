// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/yourdbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully.");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Example route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
