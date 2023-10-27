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
  );
}

export default VehicleModelList;
