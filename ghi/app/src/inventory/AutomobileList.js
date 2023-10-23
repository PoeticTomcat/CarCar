import React, { useEffect, useState } from "react";

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

  //   async function handleClick(e, automobileId {
  //     const request = await fetch(`http://localhost:8090/api/automobiles/${automobileId}`, {
  //     method: "DELETE",
  //     });

  //     const resp = await request.json();

  //     if (resp.deleted) {
  //       alert("Deleted Item");
  //       fetchData();
  //     } else {
  //       alert("Could Not Delete Item");
  //     }
  //   }

    useEffect(() => {
      fetchData();
    }, []);

  if (!autos) {
    return <div>Loading automobiles...</div>;
  }

  return (
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
              <td>{automobile.sold}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AutomobileList;
