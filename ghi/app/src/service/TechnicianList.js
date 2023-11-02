import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TechnicianList() {
  const [technicians, setTechnicians] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!technicians) {
    return <div>Loading technicians...</div>;
  }

  return (
    <div className="container text-left">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Technicians</h1>
              <Link to="/technicians/new/" className="text-decoration-none">
                <button type="button" className="btn btn-outline-primary d-md-none">+</button>
                <button type="button" className="btn btn-outline-primary d-none d-md-inline">+ Add a new technician</button>
              </Link>
            </div>
          </div>
        </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map((technician, index) => {
            return (
              <tr key={index}>
                <td>{technician.employee_id}</td>
                <td>{technician.first_name}</td>
                <td>{technician.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default TechnicianList
