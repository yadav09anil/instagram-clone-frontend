import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaHouse,
  FaMagnifyingGlass,
  FaCompass,
  FaFilm,
  FaHeart,
  FaSquarePlus,
  FaUser,
  FaRightFromBracket,
} from 'react-icons/fa6';
import './Navbar.css';


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optionally clear auth data
    // localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Social Sync</h2>
      </div>

      <ul className="navbar-menu">
        <li><Link to="/home"><FaHouse /> <span>Home</span></Link></li>
        <li><Link to="/search"><FaMagnifyingGlass /> <span>Search</span></Link></li>
        <li><Link to=""><FaHeart /> <span>Notifications</span></Link></li>
        <li><Link to="/create"><FaSquarePlus /> <span>Create</span></Link></li>
        <li><Link to="/userprofile"><FaUser /> <span>Profile</span></Link></li>
      </ul>

      <button className="logout-button" onClick={handleLogout}>
        <FaRightFromBracket /> <span>Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
