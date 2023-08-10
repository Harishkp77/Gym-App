const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "registration_db",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log(" MySQL Database connected");
  }
});

// Route to handle form submission and save data to MySQL
app.post("/register", (req, res) => {
  const registrationData = req.body;

  const sqlquery = "INSERT INTO registrations SET ?";
  db.query(sqlquery, registrationData, (err, result) => {
    if (err) throw err;
    console.log("Registration data inserted:", result);
    res.send("Registration successful!");
  });
});



app.post("/signup", (req, res) => {
  const registrationData = req.body;

  const sqlquery = "INSERT INTO signup SET ?";
  db.query(sqlquery, registrationData, (err, result) => {
    if (err) throw err;
    console.log("Registration data inserted:", result);
    res.send("Registration successful!");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
