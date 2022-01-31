import { Link } from "react-router-dom";

// styles & images
import "./Navbar.css";
import Temple from "../assets/doto-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>DoTo</span>
        </li>
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
}
