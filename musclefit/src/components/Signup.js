import React, { useState } from "react";

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
    if (formData.password !== formData.cnfpassword) {
      setServerFeedback("Passwords do not match.");
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
      .then((response) => response.text())
      .then((data) => {
        setServerFeedback(data);

        setFormData({
          msId: "",
          username: "",
          password: "",
          cnfpassword:"",
        });
      })

      .catch((error) => console.error("Error submitting form:", error));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 rounded" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
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
            <p>{serverFeedback}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
