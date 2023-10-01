CREATE DATABASE registration_db;
USE registration_db;


CREATE TABLE registrations (
    ms_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    gender ENUM('male', 'female', 'other'),
    date_of_birth DATE,
    id_proof VARCHAR(50),
    id_number VARCHAR(50),
    phone_number VARCHAR(15),
    emergency_contact VARCHAR(15),
    date_of_joining DATE,
    email VARCHAR(255),
    address_1 VARCHAR(255),
    address_2 VARCHAR(255),
    address_3 VARCHAR(255),
    pincode INT,
    payment_mode ENUM('upi', 'neft/rtgs', 'card'),
    membership_period ENUM('monthly', 'quarterly', 'halfyearly', 'yearly'),
    height INT,
    weight INT,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Adding the created_time column
);




CREATE TABLE signup (
  id INT AUTO_INCREMENT,
  msId INT,
  username VARCHAR(15) NOT NULL,
  password VARCHAR(15) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (msId) REFERENCES registrations(ms_id),
  created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


select * from muscle_building;

CREATE TABLE muscle_building (
    id INT AUTO_INCREMENT PRIMARY KEY,
    msId INT,
    exerciseName VARCHAR(255),
    date_of_exercise DATE,
    sets INT,
    reps INT,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (msId) REFERENCES registrations(ms_id)
);

ALTER TABLE muscle_building
DROP COLUMN weight;

drop table cardio_exercise;
drop table muscle_building;
select * from yoga_exercises;
select * from cardio_exercises;
select * from muscle_building;



CREATE TABLE yoga_exercises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    msId INT,
    exercise_name VARCHAR(255),
    date_of_exercise DATE,
    duration_minutes INT,
    calories_burned INT,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (msId) REFERENCES registrations(ms_id)
);





CREATE TABLE cardio_exercises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    msId INT,
    exercise_name VARCHAR(255),
    date_of_exercise DATE,
    duration_minutes INT,
    distance_km DECIMAL(8, 2),
    calories_burned INT,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (msId) REFERENCES registrations(ms_id)
);




USE registration_db;
INSERT INTO registrations (ms_id, first_name, last_name, gender, date_of_birth, id_proof, id_number, phone_number, emergency_contact, date_of_joining, email, address_1, address_2, address_3, pincode, payment_mode, membership_period, height, weight)
VALUES
    (10001, 'John', 'Doe', 'male', '1990-05-15', 'Aadhar', '1234567890', '1234567890', '9876543210', '2023-01-01', 'john@example.com', '123 Main St', 'Apt 4B', 'Building C', 12345, 'upi', 'quarterly', 175, 70),
    (10002, 'Jane', 'Smith', 'female', '1995-08-20', 'Passport', 'P1234567', '9876543211', '9876543211', '2023-02-15', 'jane@example.com', '456 Elm St', '', 'Tower 2', 56789, 'neft/rtgs', 'yearly', 160, 55),
    (10003, 'Michael', 'Johnson', 'male', '1987-03-10', 'Driver License', 'DL987654', '9876543222', '9876543222', '2023-03-10', 'michael@example.com', '789 Oak St', '', 'Block D', 34567, 'card', 'halfyearly', 180, 75),
    (10004, 'Emily', 'Williams', 'female', '1992-11-25', 'Aadhar', '9876543211', '9876543333', '9876543333', '2023-04-20', 'emily@example.com', '567 Pine St', 'Suite 8', 'Complex E', 45678, 'upi', 'monthly', 155, 50),
    (10005, 'David', 'Brown', 'male', '1988-07-02', 'Passport', 'P7654321', '9876543444', '9876543444', '2023-05-05', 'david@example.com', '890 Cedar St', '', 'Apartment F', 23456, 'neft/rtgs', 'yearly', 170, 68),
    (10006, 'Olivia', 'Miller', 'female', '1993-02-08', 'Aadhar', '9876543567', '9876543555', '9876543555', '2023-06-12', 'olivia@example.com', '1234 Maple St', 'Unit 10', 'Tower 3', 67890, 'upi', 'monthly', 165, 52),
    (10007, 'William', 'Anderson', 'male', '1985-09-30', 'Passport', 'P9876543', '9876543666', '9876543666', '2023-07-18', 'william@example.com', '5678 Oakwood Ave', '', 'Building A', 12345, 'card', 'yearly', 175, 70),
    (10008, 'Sophia', 'White', 'female', '1998-11-12', 'Aadhar', '9876543789', '9876543777', '9876543777', '2023-08-25', 'sophia@example.com', '345 Elmwood Dr', '', 'Block B', 56789, 'upi', 'quarterly', 160, 55),
    (10009, 'James', 'Taylor', 'male', '1989-04-05', 'Driver License', 'DL876543', '9876543888', '9876543888', '2023-09-05', 'james@example.com', '678 Pineapple Rd', 'Suite 12', 'Complex F', 34567, 'neft/rtgs', 'monthly', 180, 75),
    (10010, 'Emma', 'Harris', 'female', '1996-07-28', 'Aadhar', '9876543901', '9876543999', '9876543999', '2023-10-17', 'emma@example.com', '987 Willow Lane', '', 'Apartment G', 45678, 'card', 'halfyearly', 155, 50),
    (10011, 'Liam', 'Martin', 'male', '1991-12-03', 'Passport', 'P5432109', '9876544111', '9876544111', '2023-11-25', 'liam@example.com', '654 Cherry St', '', 'Tower 5', 23456, 'upi', 'yearly', 170, 68),
    (10012, 'Oliver', 'Garcia', 'male', '1997-06-18', 'Aadhar', '9876544222', '9876544222', '9876544222', '2023-12-10', 'oliver@example.com', '9876 Oak Ave', 'Unit 15', 'Building C', 67890, 'neft/rtgs', 'quarterly', 165, 52),
    (10013, 'Ava', 'Lopez', 'female', '1986-01-07', 'Passport', 'P2345678', '9876544333', '9876544333', '2024-01-20', 'ava@example.com', '123 Pine St', 'Suite 20', 'Complex B', 12345, 'upi', 'monthly', 175, 70),
    (10014, 'Noah', 'Gonzalez', 'male', '1994-03-22', 'Driver License', 'DL7654321', '9876544444', '9876544444', '2024-02-15', 'noah@example.com', '234 Elmwood Ave', '', 'Apartment A', 56789, 'card', 'yearly', 160, 55),
    (10015, 'Isabella', 'Martinez', 'female', '1999-08-14', 'Aadhar', '9876544555', '9876544555', '9876544555', '2024-03-05', 'isabella@example.com', '567 Willow Dr', '', 'Block D', 34567, 'neft/rtgs', 'quarterly', 180, 75),
    (10016, 'Sophia', 'Jones', 'female', '1984-05-30', 'Passport', 'P8765432', '9876544666', '9876544666', '2024-04-10', 'sophia@example.com', '789 Cherry Rd', 'Suite 22', 'Complex G', 45678, 'upi', 'monthly', 155, 50),
    (10017, 'Liam', 'Davis', 'male', '1982-10-19', 'Driver License', 'DL9876543', '9876544777', '9876544777', '2024-05-22', 'liam@example.com', '890 Oakwood St', '', 'Tower 8', 23456, 'card', 'halfyearly', 170, 68),
    (10018, 'Emma', 'Rodriguez', 'female', '1980-07-11', 'Aadhar', '9876544888', '9876544888', '9876544888', '2024-06-18', 'emma@example.com', '345 Elm Ave', 'Unit 30', 'Building E', 67890, 'neft/rtgs', 'yearly', 165, 52),
    (10019, 'Noah', 'Lee', 'male', '1993-01-25', 'Passport', 'P5432109', '9876544999', '9876544999', '2024-07-09', 'noah@example.com', '456 Pineapple St', '', 'Complex H', 12345, 'upi', 'quarterly', 175, 70),
    (10020, 'Olivia', 'Walker', 'female', '1996-04-17', 'Aadhar', '9876545000', '9876545000', '9876545000', '2024-08-05', 'olivia@example.com', '567 Oakwood Rd', 'Suite 40', 'Tower 10', 56789, 'neft/rtgs', 'monthly', 160, 55),
    (10021, 'William', 'Hernandez', 'male', '1987-11-08', 'Driver License', 'DL7654321', '9876545111', '9876545111', '2024-09-15', 'william@example.com', '678 Elmwood Ave', '', 'Apartment B', 34567, 'card', 'yearly', 180, 75),
    (10022, 'Ava', 'Garcia', 'female', '1990-06-21', 'Aadhar', '9876545222', '9876545222', '9876545222', '2024-10-12', 'ava@example.com', '789 Maple St', 'Unit 45', 'Building F', 45678, 'upi', 'quarterly', 155, 50),
    (10023, 'James', 'Lopez', 'male', '1981-09-02', 'Passport', 'P2345678', '9876545333', '9876545333', '2024-11-05', 'james@example.com', '890 Pine Dr', '', 'Complex A', 23456, 'neft/rtgs', 'monthly', 170, 68),
    (10024, 'Isabella', 'Smith', 'female', '1997-05-12', 'Aadhar', '9876545444', '9876545444', '9876545444', '2024-12-18', 'isabella@example.com', '123 Cherry Ave', 'Suite 50', 'Tower 12', 67890, 'card', 'halfyearly', 175, 70),
    (10025, 'Oliver', 'Jones', 'male', '1992-08-03', 'Driver License', 'DL8765432', '9876545555', '9876545555', '2025-01-30', 'oliver@example.com', '456 Elm St', '', 'Building B', 12345, 'upi', 'yearly', 160, 55),
    (10026, 'Sophia', 'Davis', 'female', '1998-03-28', 'Aadhar', '9876545666', '9876545666', '9876545666', '2025-02-28', 'sophia@example.com', '567 Oak Ave', 'Unit 60', 'Complex C', 56789, 'neft/rtgs', 'quarterly', 180, 75),
    (10027, 'Liam', 'Rodriguez', 'male', '1983-12-15', 'Passport', 'P9876543', '9876545777', '9876545777', '2025-03-18', 'liam@example.com', '678 Pineapple Rd', '', 'Tower 15', 34567, 'card', 'monthly', 165, 52),
    (10028, 'Emma', 'Hernandez', 'female', '1989-07-24', 'Aadhar', '9876545888', '9876545888', '9876545888', '2025-04-22', 'emma@example.com', '789 Elmwood Ave', 'Suite 70', 'Building G', 45678, 'upi', 'yearly', 175, 70),
    (10029, 'Noah', 'Garcia', 'male', '1995-11-09', 'Driver License', 'DL7654321', '9876545999', '9876545999', '2025-05-25', 'noah@example.com', '123 Willow Ln', '', 'Complex D', 56789, 'neft/rtgs', 'quarterly', 160, 55),
    (10030, 'Olivia', 'Martinez', 'female', '1988-02-06', 'Aadhar', '9876546000', '9876546000', '9876546000', '2025-06-10', 'olivia@example.com', '456 Oakwood Ave', 'Unit 80', 'Tower 18', 67890, 'card', 'monthly', 180, 75);




INSERT INTO signup (msId, username, password) VALUES
(10001, 'user1', 'password1'),
(10002, 'user2', 'password2'),
(10003, 'user3', 'password3'),
(10004, 'user4', 'password4'),
(10005, 'user5', 'password5'),
(10006, 'user6', 'password6'),
(10007, 'user7', 'password7'),
(10008, 'user8', 'password8'),
(10009, 'user9', 'password9'),
(10010, 'user10', 'password10'),
(10011, 'user11', 'password11'),
(10012, 'user12', 'password12'),
(10013, 'user13', 'password13'),
(10014, 'user14', 'password14'),
(10015, 'user15', 'password15'),
(10016, 'user16', 'password16'),
(10017, 'user17', 'password17'),
(10018, 'user18', 'password18'),
(10019, 'user19', 'password19'),
(10020, 'user20', 'password20'),
(10021, 'user21', 'password21'),
(10022, 'user22', 'password22'),
(10023, 'user23', 'password23'),
(10024, 'user24', 'password24'),
(10025, 'user25', 'password25'),
(10026, 'user26', 'password26'),
(10027, 'user27', 'password27'),
(10028, 'user28', 'password28'),
(10029, 'user29', 'password29'),
(10030, 'user30', 'password30');






select * from registrations;
select * from signup;
