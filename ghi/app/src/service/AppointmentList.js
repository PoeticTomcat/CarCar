import React, { useEffect, useState } from "react";

function AppointmentList() {
  const [appointments, setApointments] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setApointments(data.appointments);
    }
  };

  async function handleClick(id) {
    const response = await fetch(
      `http://localhost:8080/api/appointments/${id}/`,
      {
        method: "PUT",
      }
    );
    if (response.ok) {
      alert("Updated appointment");
      fetchData();
    } else {
      alert("Could not update appointment");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!appointments) {
    return <div>Loading appointments...</div>;
  }

  return (
    <div>
      <h1>Appointments</h1>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => {
            return (
              <tr key={index}>
                <td>{appointment.vin}</td>
                <td>{appointment.sold}</td>
                <td>{appointment.customer}</td>
                <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                <td>{appointment.reason}</td>
                <td>
                  <button
                    onClick={() => handleClick(appointment.id)}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleClick(appointment.id)}
                    className="btn btn-success"
                  >
                    Finish
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default AppointmentList;
