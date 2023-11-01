import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function VehicleModelList() {
  const [models, setModels] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!models) {
    return <div>Loading models...</div>;
  }

  return (
    <div className="container text-left">
      <div className="constainer-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Models</h1>
              <Link to="/models/new/" className="text-decoration-none">
                <button type="button" className="btn btn-outline-primary d-md-none">+</button>
                <button type="button" className="btn btn-outline-primary d-none d-md-inline">+ Add a new model</button>
              </Link>
            </div>
          </div>
        </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => {
            return (
              <tr key={index}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td>
                  <img
                    src={model.picture_url}
                    className="img-thumbnail"
                    style={{ height: "90px", width: "120px" }}
                  />
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

export default VehicleModelList;
