import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
// import ManufacturerForm from './inventory/ManufacturerForm';
import AutomobileForm from './AutomobileForm';
import VehicleModelForm from './VehicleModelForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="inventory">
              {/* <Route path="manufacturers" element={<ManufacturerList />} />
              <Route path="manufacturers/new" element={<ManufacturerForm />} /> */}
              {/* <Route path="vehicles" element={<VehicleModelList />} /> */}
              <Route path="vehicles/new" element={<VehicleModelForm />} />
              {/* <Route path="automobiles" element={<AutomobileList />} /> */}
              <Route path="automobiles/new" element={<AutomobileForm />} />
              </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
