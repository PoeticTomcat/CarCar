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
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new/">Add a manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/">Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/new">Add a model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/">Autos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">
                Add an auto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/">
                Salespeople
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/history">
                Salesperson History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/new">
                Add a new salesperson
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/new">
                Add a new customer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/">
                Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/new">
                Add a new sale
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
