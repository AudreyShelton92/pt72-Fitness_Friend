import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Workouts</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login/Sign Up
              </a>
              <ul className="dropdown-menu">
                <div className="mb-3 row">
                  <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputEmail" value="">
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" value="">
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
//