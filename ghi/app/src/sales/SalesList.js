import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SalesList() {
  const [sales, setSales] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8090/api/sales/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!sales) {
    return <div>Loading sales...</div>;
  }

  return (
    <div className="container text-left">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Sales</h1>
              <div>
                <Link to="/sales/new/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">+</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">+ Log a sale</button>
                </Link>
                <Link to="/salespeople/new/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">☞</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">☞ Add a salesperson</button>
                </Link>
                <Link to="/sales/history/" className="text-decoration-none">
                  <button type="button" className="btn btn-outline-primary ml-auto d-lg-none">☟</button>
                  <button type="button" className="btn btn-outline-primary d-none d-lg-inline">☟ Salesperson history</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson Employee ID</th>
            <th>Salesperson Name</th>
            <th>Customer Name</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => {
            return (
              <tr key={index}>
                <td>{sale.salesperson.employee_id}</td>
                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                <td>{sale.automobile.vin}</td>
                <td>${sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default SalesList;
