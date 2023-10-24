import React, { useEffect, useState } from "react";

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
    return <div>Loading models...</div>;
  }

  return (
    <div>
      <h1>Manufacturers</h1>
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
  );
}

export default ManufacturerList;
