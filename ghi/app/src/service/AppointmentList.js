import React, { useEffect, useState } from "react";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [vipStatus, setVipStatus] = useState({});

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

  const fetchVipStatus = async () => {
    const vipStatusData = {};
    for (const appointment of appointments) {
      const url = `http://localhost:8100/api/automobiles/${appointment.vin}/`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        vipStatusData[appointment.vin] = "Yes";
      } else {
        vipStatusData[appointment.vin] = "No";
      }
    }
    setVipStatus(vipStatusData);
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

  useEffect(() => {
    if (appointments) {
      fetchVipStatus();
    }
  }, [appointments]);

  if (!appointments) {
    return <div>Loading appointments...</div>;
  }

  const openAppointments = appointments.filter(
    (appointment) => appointment.status === "open"
  );

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
          {openAppointments.map((appointment, index) => {
            return (
              <tr key={index}>
                <td>{appointment.vin}</td>
                <td>{vipStatus[appointment.vin]}</td>
                <td>{appointment.customer}</td>
                <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                <td>{appointment.technician.first_name} {appointment.technician.last_name}
                </td>
                <td>{appointment.reason}</td>
                <td>
                  <button
                    onClick={() => handleCancel(appointment.id)}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleFinish(appointment.id)}
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
