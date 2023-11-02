import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AutomobileForm from "./inventory/AutomobileForm";
import AutomobileList from "./inventory/AutomobileList";
import VehicleModelForm from "./inventory/VehicleModelForm";
import VehicleModelList from "./inventory/VehicleModelList";
import ManufacturerList from "./inventory/ManufacturerList";
import ManufacturerForm from "./inventory/ManufacturerForm";
import TechnicianForm from "./service/TechnicianForm";
import TechnicianList from "./service/TechnicianList";
import AppointmentForm from "./service/AppointmentForm";
import AppointmentList from "./service/AppointmentList";
import AppointmentHistory from "./service/AppointmentHistory";
import CustomerForm from "./sales/CustomerForm";
import CustomerList from "./sales/CustomerList"
import SalespersonForm from "./sales/SalespersonForm";
import SalespersonList from "./sales/SalespersonList";
import SalespersonHistory from "./sales/SalespersonHistory";
import SalesList from "./sales/SalesList";
import SaleForm from "./sales/SaleForm";


function App() {
  return (
    <BrowserRouter className="d-flex flex-column vh-100">
      <Nav className="fixed-top" />
      <div className="container flex-grow-1">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers/" element={<ManufacturerList />} />
          <Route path="manufacturers/new/" element={<ManufacturerForm />} />

          <Route path="models/" element={<VehicleModelList />} />
          <Route path="models/new/" element={<VehicleModelForm />} />

          <Route path="automobiles/" element={<AutomobileList />} />
          <Route path="automobiles/new/" element={<AutomobileForm />} />

          <Route path="technicians/" element={<TechnicianList />} />
          <Route path="technicians/new/" element={<TechnicianForm />} />

          <Route path="appointments/" element={<AppointmentList />} />
          <Route path="appointments/history/" element={<AppointmentHistory />} />
          <Route path="appointments/new/" element={<AppointmentForm />} />


          <Route path="customers/" element={<CustomerList />} />
          <Route path="customers/new/" element={<CustomerForm />} />

          <Route path="salespeople/" element={<SalespersonList />} />
          <Route path="sales/history" element={<SalespersonHistory />} />
          <Route path="salespeople/new/" element={<SalespersonForm />} />

          <Route path="sales/" element={<SalesList />} />
          <Route path="sales/new" element={<SaleForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
