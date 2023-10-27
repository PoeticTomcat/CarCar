import React, { useEffect, useState } from "react";

function SalespersonHistory() {
  const [sales, setSales] = useState([]);
  const [selectedSalesperson, setSelectedSalesperson] = useState(null);
  const [employees, setEmployees] = useState([]);
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

  const uniqueSalespeople = [
    ...new Set(sales.map((sale) => sale.salesperson.employee_id)),
  ];
  const handleSalespersonChange = (event) => {
    setSelectedSalesperson(event.target.value);
  };

  return (
    <div>
      <h1>Salesperson History</h1>
      <label htmlFor="salespersonSelect">Select Salesperson: </label>
      <select id="salespersonSelect" onChange={handleSalespersonChange}>
        <option value="">All Salespeople</option>
        {uniqueSalespeople.map((salespersonId, idx) => (
          <option key={idx} value={salespersonId}>
            {salespersonId}
          </option>
        ))}
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.filter(selectedSales => selectedSales.salesperson.employee_id == selectedSalesperson).map((sale, index) => {
            return (
              <tr key={index}>
                <td>
                  {sale.salesperson.first_name} {sale.salesperson.last_name}
                </td>
                <td>
                  {sale.customer.first_name} {sale.customer.last_name}
                </td>
                <td>{sale.automobile.vin}</td>
                <td>${sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SalespersonHistory;
