import React, { useEffect, useState } from "react";

function SaleForm() {
  const [salespeople, setSalespeople] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [autos, setAutos] = useState([]);
  const [formData, setFormData] = useState({
    salesperson: "",
    customer: "",
    automobile: "",
    price: "",
  });

  const fetchSalespeople = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  const fetchCustomers = async () => {
    const url = "http://localhost:8090/api/customers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers);
    }
  };

  const fetchAutomobiles = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutos(data.autos);
    }
  };

  useEffect(() => {
    fetchSalespeople();
    fetchCustomers();
    fetchAutomobiles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8090/api/sales/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, fetchConfig);

      if (response.ok) {
        const autosUrl = `http://localhost:8100/api/automobiles/${formData.automobile}/`;
        const autoSoldConfig = {
          method: "put",
          body: JSON.stringify({ sold: true }),
          headers: {
            "Content-Type": "application/json",
          },
        };

        const autoSoldResponse = await fetch(autosUrl, autoSoldConfig);
        setFormData({
          salesperson: "",
          customer: "",
          automobile: "",
          price: "",
        });
      } else {
        const data = await response.json();
        console.error("Could not create sale:", data.error);
      }
    } catch (error) {
      console.error("Network or unexpected error:", error);
    }
  };

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value,
    });
  };

  const unsoldAutomobiles = autos.filter(
    (automobile) => automobile.sold === false
  );

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Record a new sale</h1>
          <form onSubmit={handleSubmit} id="create-sale-form">
            <div className="form-floating mb-3">
              <select
                value={formData.automobile}
                onChange={handleFormChange}
                required
                name="automobile"
                id="automobile"
                className="form-select"
              >
                <option value="">Choose an Automobile VIN</option>
                {unsoldAutomobiles.map((automobile) => {
                  return (
                    <option key={automobile.vin} value={automobile.vin}>
                      {automobile.vin}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="automobile">Select an Automobile VIN</label>
            </div>
            <div className="form-floating mb-3">
              <select
                value={formData.salesperson}
                onChange={handleFormChange}
                name="salesperson"
                id="salesperson"
                className="form-select"
              >
                <option value="">Salesperson</option>
                {salespeople.map((salesperson) => (
                  <option
                    key={salesperson.employee_id}
                    value={salesperson.employee_id}
                  >
                    {salesperson.employee_id}
                  </option>
                ))}
              </select>
              <label htmlFor="salesperson">Select a Salesperson</label>
            </div>
            <div className="form-floating mb-3">
              <select
                value={formData.customer}
                onChange={handleFormChange}
                name="customer"
                id="customer"
                className="form-select"
              >
                <option value="">Customer</option>
                {customers.map((customer) => (
                  <option key={customer.last_name} value={customer.last_name}>
                    {customer.last_name}
                  </option>
                ))}
              </select>
              <label htmlFor="salesperson">Select a Customer</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={formData.price}
                onChange={handleFormChange}
                placeholder="Price"
                required
                type="number"
                name="price"
                id="price"
                className="form-control"
              />
              <label htmlFor="price">Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SaleForm;
