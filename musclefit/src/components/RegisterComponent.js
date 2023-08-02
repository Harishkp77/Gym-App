import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    id_proof: "",
    id_number: "",
    phone_number: "",
    whatsapp_number: "",
    address_1: "",
    address_2: "",
    pincode: "",
    email: "",
    payment_mode: "",
    emergency_contact: "",
    membership_period: "",
    height: "",
    weight: "",
    date_of_joining: "",
    graduation_date: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration successful:", data);
        // Reset the form after successful registration

        setFormData({
          first_name: "",
          last_name: "",
          gender: "",
          date_of_birth: "",
          id_proof: "",
          id_number: "",
          phone_number: "",
          whatsapp_number: "",
          address_1: "",
          address_2: "",
          pincode: "",
          email: "",
          payment_mode: "",
          emergency_contact: "",
          membership_period: "",
          height: "",
          weight: "",
          date_of_joining: "",
          graduation_date: "",
          comments: "",
        });
      })

      .catch((error) => console.error("Error submitting form:", error));
  };
  // Reset the form after successful registration

  return (
    <div className="container mt-4">
      <div className="cover-card">
        <h2 className="cover-title">Registration Form</h2>
        <form onSubmit={handleSubmit} className="reg-group">
          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="gender">Gender</label>
              <select
                className="form-control"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="date_of_birth">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="date_of_birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="id_proof">ID Proof</label>
              <select
                className="form-control"
                id="id_proof"
                value={formData.idProof}
                onChange={handleChange}
              >
                <option value="">Select ID Proof</option>
                <option value="pan">Pan</option>
                <option value="aadhar">Aadhar</option>
                <option value="otherid">Other ID's</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="id_number">ID number</label>
              <input
                type="tel"
                className="form-control"
                id="id_number"
                value={formData.idNumber}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="phone_number">Phone number</label>
              <input
                type="tel"
                className="form-control"
                id="phone_number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="whatsapp_number">Whatsapp number</label>
              <input
                type="tel"
                className="form-control"
                id="whatsapp_number"
                value={formData.whatsappNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 mb-3">
              <label htmlFor="address_1">Address1(Street)</label>
              <input
                type="text"
                className="form-control"
                id="address_1"
                value={formData.address1}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="address_2">Address2(Area)</label>
              <input
                type="text"
                className="form-control"
                id="address_2"
                value={formData.address2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 mb-3">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="number"
                className="form-control"
                id="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="payment_mode">Payment Mode</label>
              <select
                className="form-control"
                id="payment_mode"
                value={formData.paymentMode}
                onChange={handleChange}
              >
                <option value="">Select Payment Mode</option>
                <option value="upi">UPI</option>
                <option value="neft/rtgs">NEFT/RTGS</option>
                <option value="card">Debit/Credit Card</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="emergency_contact">Emergency Contact no</label>
              <input
                type="tel"
                className="form-control"
                id="emergency_contact"
                value={formData.emergencyContact}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="membership_period">Membership Period</label>
              <select
                className="form-control"
                id="membership_period"
                value={formData.membershipPeriod}
                onChange={handleChange}
              >
                <option value="">Select Membership Period</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="halfyearly">Half-yearly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="height">Height in cm's</label>
              <input
                type="number"
                className="form-control"
                id="height"
                value={formData.height}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="weight">Weight in kg's</label>
              <input
                type="number"
                className="form-control"
                id="weight"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="date_of_joining">Date of Joining</label>
              <input
                type="date"
                className="form-control"
                id="date_of_joining"
                value={formData.dateOfJoining}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 mb-3">
              <label htmlFor="graduation_date">Graduation Date</label>
              <input
                type="date"
                className="form-control"
                id="graduation_date"
                value={formData.graduationDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-11 mb-3">
              <label htmlFor="comments">Comments</label>
              <textarea
                className="form-control"
                id="comments"
                rows="3"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="d-grid gap-1 col-6 mx-auto">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
