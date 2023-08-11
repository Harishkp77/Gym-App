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
  const signupData = req.body;

  const sqlquery = "INSERT INTO signup SET ?";
  db.query(sqlquery, signupData, (err, result) => {
    if (err) {
      if (err.code === "1452") {
        return res.status(400).json({ error: "Invalid msId. This user does not exist. Contact Admin" });
      }
      return res.status(500).json({ error: "An error occurred while processing your request. Contact Admin" });
    }
    console.log("signup data inserted:", result);
    res.send("signup successful!");
  });
});


app.post("/save_muscle_building", (req, res) => {
  const muscleBuildingData = req.body;

  const sqlquery = "INSERT INTO muscle_building SET ?";
  db.query(sqlquery, muscleBuildingData, (err, result) => {
    if (err) throw err;
    console.log("Registration data inserted:", result);
    res.send("Registration successful!");
  });
});

app.post("/save_cardio_strength", (req, res) => {
  const cardiostrengthData = req.body;

  const sqlquery = "INSERT INTO registrations SET ?";
  db.query(sqlquery, cardiostrengthData, (err, result) => {
    if (err) throw err;
    console.log("Registration data inserted:", result);
    res.send("Registration successful!");
  });
});

app.post("/save_stretch_yoga", (req, res) => {
  const stretchyogaData  = req.body;

  const sqlquery = "INSERT INTO registrations SET ?";
  db.query(sqlquery, stretchyogaData , (err, result) => {
    if (err) throw err;
    console.log("Registration data inserted:", result);
    res.send("Registration successful!");
  });
});


























const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
