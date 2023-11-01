import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function VehicleModelForm() {
  const [manufacturers, setManufacturers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    picture_url: "",
    manufacturer_id: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.picture_url.length > 255) {
        throw new Error("Picture URL is too long");
      }

      const url = "http://localhost:8100/api/models/";
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
          name: "",
          picture_url: "",
          manufacturer_id: "",
        });
      }
    } catch (error) {
      alert(error.message);
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
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="shadow p-4 mt-4">
          <h1>Create a vehicle model</h1>
          <form onSubmit={handleSubmit} id="create-model-form">
            <div className="form-floating mb-3">
              <input
                value={formData.picture_url}
                onChange={handleFormChange}
                placeholder="Picture URL"
                required
                type="url"
                name="picture_url"
                id="picture_url"
                className="form-control"
              />
              <label htmlFor="picture_url">Picture URL</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Name"
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="mb-3">
              <select
                value={formData.manufacturer_id}
                onChange={handleFormChange}
                required
                name="manufacturer_id"
                id="manufacturer_id"
                className="form-select"
              >
                <option value="">Choose a manufacturer</option>
                {manufacturers.map((manufacturer) => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id}>
                      {manufacturer.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 mt-3">
        <div className="d-flex justify-content-center">
          <Link to="/models/">
            <button type="button" className="btn btn-outline-secondary">See all models</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VehicleModelForm;
