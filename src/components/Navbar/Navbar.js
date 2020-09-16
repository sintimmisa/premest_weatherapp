import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          WeatherApp
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link to={"/weather"} className="nav-link">
                Get Weather
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
