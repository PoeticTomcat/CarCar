import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AutomobileForm() {
  const [models, setModels] = useState([]);
  const [formData, setFormData] = useState({
    color: "",
    year: "",
    vin: "",
    model_id: "",
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      setFormData({
        color: "",
        year: "",
        vin: "",
        model_id: "",
      });
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

  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new automobile</h1>
            <form onSubmit={handleSubmit} id="create-auto-form">
              <div className="form-floating mb-3">
                <input
                  value={formData.color}
                  onChange={handleFormChange}
                  placeholder="Color"
                  required
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={formData.year}
                  onChange={handleFormChange}
                  placeholder="Year"
                  required
                  type="text"
                  name="year"
                  id="year"
                  className="form-control"
                />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={formData.vin}
                  onChange={handleFormChange}
                  placeholder="VIN"
                  required
                  type="text"
                  name="vin"
                  id="vin"
                  className="form-control"
                />
                <label htmlFor="vin">VIN Number</label>
              </div>
              <div className="mb-3">
                <select
                  value={formData.model_id}
                  onChange={handleFormChange}
                  required
                  name="model_id"
                  id="model_id"
                  className="form-select"
                >
                  <option value="">Choose A Model</option>
                  {models.map((model) => {
                    return (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="offset-3 col mt-3">
          <Link to="/automobiles/">
            <button type="button" className="btn btn-outline-primary">See all automobiles</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AutomobileForm;
