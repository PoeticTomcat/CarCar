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
    <div class="container text-left">
      <div class="row">
        <div class="col"><h1>Automobiles</h1></div>
        <div class="col-md-auto">
          <Link to="/automobiles/new/">
            <button type="button" className="btn btn-outline-primary">+ Add a new automobile</button>
          </Link></div>
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
  );
}

export default AutomobileList;
