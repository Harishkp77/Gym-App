CREATE DATABASE registration_db;
USE registration_db;


CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  gender ENUM('male', 'female', 'other') NOT NULL,
  date_of_birth DATE NOT NULL,
  id_proof ENUM('pan', 'aadhar', 'otherid') NOT NULL,
  id_number VARCHAR(50) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  whatsapp_number VARCHAR(20) NOT NULL,
  address_1 VARCHAR(255) NOT NULL,
  address_2 VARCHAR(255),
  pincode INT NOT NULL,
  email VARCHAR(255) NOT NULL,
  payment_mode ENUM('upi', 'neft/rtgs', 'card') NOT NULL,
  emergency_contact VARCHAR(20) NOT NULL,
  membership_period ENUM('monthly', 'quarterly', 'halfyearly', 'yearly') NOT NULL,
  height INT NOT NULL,
  weight INT NOT NULL,
  date_of_joining DATE NOT NULL,
  graduation_date DATE,
  comments TEXT
);
select * from registrations