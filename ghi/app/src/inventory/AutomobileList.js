import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AutomobileList() {
  const [autos, setAutos] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutos(data.autos);
    }
  };

    useEffect(() => {
      fetchData();
    }, []);

  if (!autos) {
    return <div>Loading automobiles...</div>;
  }

  return (
    <div className="container text-left">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Automobiles</h1>
              <Link to="/automobiles/new/" className="text-decoration-none">
                <button type="button" className="btn btn-outline-primary d-md-none">+</button>
                <button type="button" className="btn btn-outline-primary d-none d-md-inline">+ Add a new automobile</button>
              </Link>
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Color</th>
              <th>Year</th>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            {autos.map((automobile, index) => {
              return (
                <tr key={index}>
                  <td>{automobile.vin}</td>
                  <td>{automobile.color}</td>
                  <td>{automobile.year}</td>
                  <td>{automobile.model.name}</td>
                  <td>{automobile.model.manufacturer.name}</td>
                  <td>{automobile.sold ? "Yes" : "No"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AutomobileList;
