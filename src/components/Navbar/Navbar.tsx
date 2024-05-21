import { FaHome } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import "./Navbar.scss";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="site-navbar">
      <div className="nav-left">
        <NavLink to={!isLoggedIn ? "/" : "/cards"} className="brand">
          Home
          <FaHome />
        </NavLink>
        <NavLink to="/FavCards" className="brand ml-7">
          Fav Cards
        </NavLink>
        <NavLink to="/MyCards" className="brand ml-7">
          My Cards
        </NavLink>
      </div>

      <div className="nav-right">
        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
        {!isLoggedIn && <NavLink to="/">Login</NavLink>}
        {isLoggedIn && (
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        )}

        {isLoggedIn && <NavLink to="/profile"><RxAvatar/></NavLink>}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
