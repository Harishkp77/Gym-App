
function App() {
  return (
    <div className="container mt-4">
      <h2>Student Information</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="age">Age</label>
          <input type="number" className="form-control" id="age" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="gender">Gender</label>
          <select className="form-control" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="col-md-8 mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="phone">Phone</label>
          <input type="tel" className="form-control" id="phone" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="course">Course</label>
          <input type="text" className="form-control" id="course" />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="gpa">GPA</label>
          <input type="text" className="form-control" id="gpa" />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="admissionDate">Admission Date</label>
          <input type="date" className="form-control" id="admissionDate" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="graduationDate">Graduation Date</label>
          <input type="date" className="form-control" id="graduationDate" />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="parentName">Parent Name</label>
          <input type="text" className="form-control" id="parentName" />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="parentEmail">Parent Email</label>
          <input type="email" className="form-control" id="parentEmail" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="parentPhone">Parent Phone</label>
          <input type="tel" className="form-control" id="parentPhone" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="comments">Comments</label>
          <textarea className="form-control" id="comments" rows="3"></textarea>
        </div>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-primary">Submit</button></div>
    </div>
      );
}

export default App;