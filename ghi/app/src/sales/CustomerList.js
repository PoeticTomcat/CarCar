import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8090/api/customers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!customers) {
    return <div>Loading customers...</div>;
  }

  return (
    <div className="container text-left">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Customers</h1>
              <Link to="/customers/new/" className="text-decoration-none">
                <button type="button" className="btn btn-outline-primary d-md-none">+</button>
                <button type="button" className="btn btn-outline-primary d-none d-md-inline">+ Add a customer</button>
              </Link>
            </div>
          </div>
        </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => {
            return (
              <tr key={index}>
                <td>
                  {customer.first_name} {customer.last_name}
                </td>
                <td>{customer.address}</td>
                <td>{customer.phone_number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default CustomerList;
