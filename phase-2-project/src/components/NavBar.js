import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">All Characters</NavLink>
      <NavLink to="/add-character" className="nav-link">Add Character</NavLink>
      <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
      <NavLink to="/greetings" className="nav-link">Greetings</NavLink>
    </nav>
  );
}

export default NavBar;
