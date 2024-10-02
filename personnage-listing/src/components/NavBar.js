import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" activeClassName="active">
        All Characters
      </NavLink>
      <NavLink to="/add-character" className="nav-link" activeClassName="active">
        Add Character
      </NavLink>
      <NavLink to="/favorites" className="nav-link" activeClassName="active">
        Favorites
      </NavLink>
x
    </nav>
  );
}

export default NavBar;
