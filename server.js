const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Load JSON file
const companiesFilePath = path.join(__dirname, "data", "companies.json");

app.get("/api/companies", (req, res) => {
  fs.readFile(companiesFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading data" });
    }

    const companies = JSON.parse(data);
    res.json(companies);
  });
});

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Backend server running on PORT ${port}`);
});
