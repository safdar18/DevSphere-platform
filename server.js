const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DevSphere Server is Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

app.get("/api/status", (req, res) => {
  res.json({
    message: "DevSphere API is working",
    status: "success"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    service: "DevSphere",
    uptime: process.uptime(),
    timestamp: new Date(),
    status: "OK"
  });
});