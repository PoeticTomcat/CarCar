import React, { useEffect, useState } from "react";

function SalespersonList() {
  const [salespeople, setSalespeople] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!salespeople) {
    return <div>Loading salespeople...</div>;
  }

  return (
    <div>
      <h1>Salespeople</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {salespeople.map((salesperson, index) => {
            return (
              <tr key={index}>
                <td>
                  {salesperson.first_name} {salesperson.last_name}
                </td>
                <td>{salesperson.employee_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SalespersonList;
