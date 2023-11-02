import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AppointmentHistory() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    searchVin: "",
  });

  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
    }
  };

  useEffect(() => {
    fetchData();
  }, [formData.searchVin]);

  const handleSearch = async (e) => {
    e.preventDefault();

    const filteredAppointments = appointments.filter((appointment) => {
      return appointment.vin.includes(formData.searchVin);
    });
    setAppointments(filteredAppointments);

    if (!filteredAppointments) {
      alert("No appointments match this search, please try again...");
    }
  };

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value,
    });
  };

  if (!appointments) {
    return <div>Loading appointments...</div>;
  }

  return (
    <div className="container text-left">
      <div className="container-fluid">
        <div className="row-auto">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Service History</h1>
              <div>
                <Link to="/appointments/new/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">+</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">+ Book an appointment</button>
                </Link>
                <Link to="/appointments/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">▷</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">▷ Open appointments</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      <div className="mb-4">
        <form
          className="d-flex"
          role="search"
          onSubmit={handleSearch}
          id="search-vins"
        >
          <input
            value={formData.searchVin}
            onChange={handleFormChange}
            name="searchVin"
            className="form-control me-2"
            type="search"
            placeholder="Search by VIN..."
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Vin</th>
            <th>Is VIP?</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => {
            return (
              <tr key={index}>
                <td>{appointment.vin}</td>
                <td>{appointment.is_vip ? "Yes" : "No"}</td>
                <td>{appointment.customer}</td>
                <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                <td>{new Date(appointment.date_time).toLocaleTimeString([],{hour: "2-digit", minute: "2-digit"})}</td>
                <td>
                  {appointment.technician.first_name}{" "}
                  {appointment.technician.last_name}
                </td>
                <td>{appointment.reason}</td>
                <td>{appointment.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
}
export default AppointmentHistory;
