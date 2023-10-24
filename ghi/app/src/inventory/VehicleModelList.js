import React, { useEffect, useState } from "react";

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

  async function handleClick(modelId) {
    const response = await fetch(
      `http://localhost:8100/api/models/${modelId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      alert("Delete Item");
      fetchData();
    } else {
      alert("Could Not Delete Item");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!models) {
    return <div>Loading models...</div>;
  }

  return (
    <div>
      <h1>Models</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
            <th>Actions</th>
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
                    style={{ height: "70px", width: "70px" }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleClick(model.id)}
                    className="btn btn-danger"
                  >
                    Delete
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

export default VehicleModelList;
