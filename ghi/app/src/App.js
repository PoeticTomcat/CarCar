import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AutomobileForm from "./inventory/AutomobileForm";
import AutomobileList from "./inventory/AutomobileList";
import VehicleModelForm from "./inventory/VehicleModelForm";
import VehicleModelList from "./inventory/VehicleModelList";
import ManufacturerList from "./inventory/ManufacturerList";
import ManufacturerForm from "./inventory/ManufacturerForm";
import CustomerForm from "./sales/CustomerForm";
import CustomerList from "./sales/CustomerList"
import SalespersonForm from "./sales/SalespersonForm";
import SalespersonList from "./sales/SalespersonList";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models/new/" element={<VehicleModelForm />} />
          <Route path="models/" element={<VehicleModelList />} />
          <Route path="manufacturers/" element={<ManufacturerList />} />
          <Route path="automobiles/new/" element={<AutomobileForm />} />
          <Route path="automobiles" element={<AutomobileList />} />
          <Route path="manufacturers/new/" element={<ManufacturerForm />} />
          <Route path="customers/new/" element={<CustomerForm />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="salespeople/new/" element={<SalespersonForm />} />
          <Route path="salespeople" element={<SalespersonList />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
