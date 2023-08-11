CREATE DATABASE registration_db;
USE registration_db;


CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) ,
    last_name VARCHAR(255) ,
    gender ENUM('male', 'female', 'other'),
    date_of_birth DATE ,
    id_proof VARCHAR(50) ,
    id_number VARCHAR(50) ,
    phone_number VARCHAR(15) ,
    emergency_contact VARCHAR(15) ,
    date_of_joining DATE ,
    email VARCHAR(255) ,
	address_1 VARCHAR(255) ,
	address_2 VARCHAR(255) ,
    address_3 VARCHAR(255) ,
	pincode int ,
    payment_mode ENUM('upi', 'neft/rtgs', 'card') ,
    membership_period ENUM('monthly', 'quarterly', 'halfyearly', 'yearly') ,
    height INT ,
    weight INT 
);



CREATE TABLE signup (
  id INT AUTO_INCREMENT,
  msId INT,
  username VARCHAR(15) NOT NULL,
  password VARCHAR(15) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (msId) REFERENCES registrations(id)
);


select * from muscle_building;

CREATE TABLE muscle_building (
  id INT AUTO_INCREMENT PRIMARY KEY,
  exerciseName VARCHAR(255) NOT NULL,
  date_of_exercise DATE NOT NULL,
  sets INT NOT NULL,
  reps INT NOT NULL,
  weight DECIMAL(10, 2) NOT NULL
);




CREATE TABLE exercise_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    exercise_name VARCHAR(255) NOT NULL,
    date_of_exercise DATE NOT NULL,
    duration_minutes INT NOT NULL,
    calories_burned INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE cardio_exercise (
    id INT AUTO_INCREMENT PRIMARY KEY,
    exercise_name VARCHAR(255) NOT NULL,
    date_of_exercise DATE NOT NULL,
    duration_minutes INT NOT NULL,
    distance_km DECIMAL(10, 2) NOT NULL,
    calories_burned INT NOT NULL
);










select * from registrations;
select * from signup;
