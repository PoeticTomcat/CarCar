import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (!response.ok) {
      console.log("The response isn't working");
    } else {
      const data = await response.json();
      setAppointments(data.appointments);
    }
  };

  async function handleCancel(id) {
    const response = await fetch(
      `http://localhost:8080/api/appointments/${id}/cancel/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "cancelled" }),
      }
    );
    if (response.ok) {
      alert("Cancelled appointment");
      fetchData();
    } else {
      alert("Could not cancel appointment");
    }
  }

  async function handleFinish(id) {
    const response = await fetch(
      `http://localhost:8080/api/appointments/${id}/finish/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "finished" }),
      }
    );
    if (response.ok) {
      alert("Finished appointment");
      fetchData();
    } else {
      alert("Could not finish appointment");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!appointments) {
    return <div>Loading appointments...</div>;
  }

  const openAppointments = appointments.filter(
    (appointment) => appointment.status === "open"
  );

  return (
    <div className="container text-left">
      <div className="container-fluid">
        <div className="row-auto">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Open Appointments</h1>
              <div>
                <Link to="/appointments/new/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">+</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">+ Book an appointment</button>
                </Link>
                <Link to="/appointments/history/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">⏱</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">⏱ Appointment history</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Vin</th>
              <th>VIP?</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {openAppointments.map((appointment, index) => {
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
                  <td>
                    <div className="d-flex">
                      <button onClick={() => handleCancel(appointment.id)} className="btn btn-danger d-none d-lg-inline">Cancel</button>
                      <button onClick={() => handleCancel(appointment.id)} className="btn btn-danger d-lg-none d-md-inline">✗</button>
                      <button onClick={() => handleFinish(appointment.id)} className="btn btn-success d-none d-lg-inline">Finish</button>
                      <button onClick={() => handleFinish(appointment.id)} className="btn btn-success d-lg-none d-md-inline">✓</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppointmentList;
