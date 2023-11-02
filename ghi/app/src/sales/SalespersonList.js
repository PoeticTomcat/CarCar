import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SalespersonList() {
  const [salespeople, setSalespeople] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!salespeople) {
    return <div>Loading salespeople...</div>;
  }

  return (
    <div className="container text-left">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Salespeople</h1>
              <div>
                <Link to="/salespeople/new/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">☞</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">☞ Add a salesperson</button>
                </Link>
                <Link to="/sales/history/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">☟</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">☟ Salesperson history</button>
                </Link>
                <Link to="/sales/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">☰</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">☰ All sales</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {salespeople.map((salesperson, index) => {
            return (
              <tr key={index}>
                <td>
                  {salesperson.first_name} {salesperson.last_name}
                </td>
                <td>{salesperson.employee_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default SalespersonList;
