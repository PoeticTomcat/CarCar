<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
// import ManufacturerForm from './inventory/ManufacturerForm';
import AutomobileForm from './AutomobileForm';
import VehicleModelForm from './VehicleModelForm';
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AutomobileForm from "./inventory/AutomobileForm";
import VehicleModelForm from "./inventory/VehicleModelForm";
>>>>>>> d17da385ad24c8abfc893d69e3af2dae68b390ef

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
<<<<<<< HEAD
          <Route path="inventory">
              {/* <Route path="manufacturers" element={<ManufacturerList />} />
              <Route path="manufacturers/new" element={<ManufacturerForm />} /> */}
              {/* <Route path="vehicles" element={<VehicleModelList />} /> */}
              <Route path="vehicles/new" element={<VehicleModelForm />} />
              {/* <Route path="automobiles" element={<AutomobileList />} /> */}
              <Route path="automobiles/new" element={<AutomobileForm />} />
              </Route>
=======
          <Route path="models/new/" element={<VehicleModelForm />} />
          <Route path="automobiles/new/" element={<AutomobileForm />} />
>>>>>>> d17da385ad24c8abfc893d69e3af2dae68b390ef
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
