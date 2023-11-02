import { NavLink } from "react-router-dom";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" aria-current="page" to="/">CarCar</NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/manufacturers/">Manufacturers</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/manufacturers/new/">+</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/models/">Models</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/models/new/">+</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/automobiles/">Automobiles</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/automobiles/new/">+</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/technicians/">Technicians</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/technicians/new/">+</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/appointments/">Appointments</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/appointments/new/">+</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/appointments/history/">Appt history</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/salespeople/">Salespeople</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/salespeople/new/">+</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/sales/history/">Sales history</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/customers/">Customers</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/customers/new/">+</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/sales/">Sales</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/sales/new/">+</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
