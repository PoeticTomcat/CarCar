import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!manufacturers) {
    return <div>Loading manufacturers...</div>;
  }

  return (
    <div className="container text-left">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Manufacturers</h1>
              <Link to="/manufacturers/new/" className="text-decoration-none">
                <button type="button" className="btn btn-outline-primary d-md-none">+</button>
                <button type="button" className="btn btn-outline-primary d-none d-md-inline">Add a new manufacturer</button>
              </Link>
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {manufacturers.map((manufacturer, index) => {
              return (
                <tr key={index}>
                  <td>{manufacturer.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManufacturerList;
