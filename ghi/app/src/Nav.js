import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown"><NavLink exact className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inventory</NavLink>
              <ul className="dropdown-menu">
                <li className="nav-item"><NavLink className="dropdown-item" to="/manufacturers/">Manufacturers</NavLink></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/manufacturers/new/">‣ Add a manufacturer</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/models/">Models</NavLink></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/models/new/">‣ Add a model</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/automobiles/">Autos</NavLink></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/automobiles/new/">‣ Add an auto</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><NavLink exact className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">Service</NavLink>
              <ul className="dropdown-menu">
                <li className="nav-item"><NavLink className="dropdown-item" to="/technicians/">Technicians</NavLink></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/technicians/new/">‣ Add a Technician</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/appointments/">Appointments</NavLink></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/appointments/history/">‣ Service History</NavLink></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/appointments/new/">‣ Make an Appointment</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
