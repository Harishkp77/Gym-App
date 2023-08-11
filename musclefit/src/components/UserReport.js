import React, { useState } from "react";

const  UserReport = () => {
    const [formData, setFormData] = useState({
        exerciseName: "",
        date:"",
        sets: "",
        reps: "",
        weight: "",
      });
    //   const [report, setReport] = useState("");
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const generateReport = (e) => {
        e.preventDefault();
    
        // const newReport = `Exercise: ${formData.exerciseName}\nSets: ${formData.sets}\nReps: ${formData.reps}\nWeight: ${formData.weight}`;
        // setReport(newReport);

        const exerciseData = {
            exerciseName: formData.exerciseName,
            date_of_exercise: formData.date,
            sets: formData.sets,
            reps: formData.reps,
            weight: formData.weight,
          };
          fetch("/save_muscle_building", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(exerciseData),
          })
            .then((response) => response.text())
            .then((data) => {
              console.log(data);
              // Clear the form after successful submission
              setFormData({
                exerciseName: "",
                date: "",
                sets: "",
                reps: "",
                weight: "",
                
              });
            })
            .catch((error) => console.error("Error submitting form:", error));
        };

  
    
      return (
        <div className="exercise-report">
          <h2>Gym Exercise Report</h2>
          <form onSubmit={generateReport} className="reg-group">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="exerciseName">Exercise Name</label>
                <select
                  className="form-control px-3"
                  id="exerciseName"
                  value={formData.exerciseName}
                  onChange={handleChange}
                >
                  <option value="">Select an exercise</option>
                  <option value="Bench Press">Bench Press</option>
                  <option value="Squat">Squat</option>
                  <option value="Deadlift">Deadlift</option>
                  <option value="Pull-up">Pull-up</option>
                  <option value="Push-up">Push-up</option>
                  {/* Add more exercise options as needed */}
                </select>
              </div>
              <div className="col-md-4 mb-3">
          <label htmlFor="date">Date of Exercise</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="sets">Sets</label>
                <input
                  type="text"
                  className="form-control"
                  id="sets"
                  value={formData.sets}
                  onChange={handleChange}
                />
              </div>
              
              <div className="col-md-4 mb-3">
                <label htmlFor="reps">Reps</label>
                <input
                  type="text"
                  className="form-control"
                  id="reps"
                  value={formData.reps}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  className="form-control"
                  id="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-grid gap-1 col-4 mx-auto py-4">
              <button className="btn btn-primary py-3" type="submit" onClick={generateReport}>
                Generate Report
              </button>
            </div>
            {/* {report && (
              <div className="report">
                <h3>Generated Report:</h3>
                <pre>{report}</pre>
              </div>
            )} */}
          </form>
        </div>
      );
    };

export default UserReport;