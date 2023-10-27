import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" aria-current="page" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                aria-current="page"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manufacturers
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="manufacturers/"
                  >
                    Manufacturers
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/manufacturers/new/"
                  >
                    ‣ Add a manufacturer
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                aria-current="page"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Models
              </NavLink>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/models/"
                  >
                    Models
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/models/new/"
                  >
                    ‣ Add a model
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                aria-current="page"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Automobiles
              </NavLink>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/automobiles/"
                  >
                    Automobiles
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/automobiles/new/"
                  >
                    ‣ Add an auto
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                aria-current="page"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technicians
              </NavLink>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/technicians/"
                  >
                    Technicians
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/technicians/new/"
                  >
                    ‣ Add a Technician
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                aria-current="page"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Appointments
              </NavLink>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/appointments/"
                  >
                    Appointments
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/appointments/history/"
                  >
                    ‣ Service History
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/appointments/new/"
                  >
                    ‣ Make an Appointment
                  </NavLink>
                </li>
              </ul>
            </li>
            //AAAAAAAAAAAAAAAAAAAAAAA
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
