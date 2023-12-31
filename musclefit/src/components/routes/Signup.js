import React, { useState } from "react";
import Layout from "./Layout";

const Signup = () => {
  const [formData, setFormData] = useState({
    msId: "",
    username: "",
    password: "",
    cnfpassword:"",
  });

  const [serverFeedback, setServerFeedback] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate all fields
    if (
      formData.msId === "" ||
      formData.username === "" ||
      formData.password === "" ||
      formData.cnfpassword === ""
    ) {
      setServerFeedback("Kindly Enter all fields.");
      return;
    }
  
    if (formData.password !== formData.cnfpassword) {
      setServerFeedback("Passwords Mismatch.");
      return;
    }
  
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        msId: formData.msId,
        username: formData.username,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        if (data.includes("signup successful!")) {
          setServerFeedback("Signup successful!");
        } else {
          setServerFeedback(data); // Display other error messages
        }
  
        setFormData({
          msId: "",
          username: "",
          password: "",
          cnfpassword: "",
        });
      })
      .catch((error) => {
        if (error.message.includes("HTTP error! Status: 500")) {
          setServerFeedback("Contact Admin to Register");
        } else {
          setServerFeedback("Error submitting form: " + error.message);
        }
      });
  };
  
  

  return (
    <>
    <Layout/>
    <div className="container py-5 justify-content-center align-items-center" style={{ maxWidth: "400px" }}>
            <div className="cover-card px-3 mt-1">
        <h2 className="mb-2 text-center py-3">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="msId" className="form-label">
              Memebr ID
            </label>
            <input
              type="text"
              className="form-control"
              id="msId"
              placeholder="Enter your name"
              value={formData.msId}
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="create your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="create your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cnfpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cnfpassword"
              placeholder="Re-Enter your password"
              value={formData.cnfpassword}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            </div>
            <div className="mt-3 text-center">
     
              {serverFeedback && (
                <p className={serverFeedback.includes("error") ? "text-danger" : "text-success"}>
                  {serverFeedback}
                </p>
              )}
            </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;
