import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/routes/Layout';

const DailyMuscleReport = () => {
  const { msId } = useParams();

  const [muscleData, setMuscleData] = useState([]);

  useEffect(() => {
    // Fetch the daily muscle exercise report data using an API call and set it to muscleData state
    fetch(`http://localhost:5000/daily-muscle-report/${msId}`)
      .then(response => response.json())
      .then(data => setMuscleData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [msId]);

  return (
    <>
      <Layout />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Daily Muscle Exercise Report</h1>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Exercise Name</th>
                  <th>Date</th>
                  <th>Sets</th>
                  <th>Reps</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {muscleData.map((exercise, index) => (
                  <tr key={index}>
                    <td>{exercise.exerciseName}</td>
                    <td>{new Date(exercise.date_of_exercise).toLocaleDateString()}</td>
                    <td>{exercise.sets}</td>
                    <td>{exercise.reps}</td>
                    <td>{exercise.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {muscleData.length === 0 && (
              <p className="text-center">No muscle exercise data available for today.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyMuscleReport;
