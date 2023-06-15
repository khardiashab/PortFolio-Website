import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.scss"

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          My Portfolio
        </Link>
        <div className="navbar-toggle d-block d-lg-none" onClick={handleOpen}>
          <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={open ? 'ms-auto d-none d-lg-none me-3 navbar-menu active' : 'ms-auto d-none d-lg-none me-3 navbar-menu'}>
          <li className="navbar-item">
            <Link to="/" className="navbar-menu-links" onClick={handleOpen}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-menu-links" onClick={handleOpen}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-menu-links" onClick={handleOpen}>
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/skills" className="navbar-menu-links" onClick={handleOpen}>
              Skills
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-menu-links" onClick={handleOpen}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? 'sidebar-container active' : 'sidebar-container'}>
      <div className="sidebar-toggle" onClick={handleOpen}>
        <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-links" onClick={handleOpen}>
            Home
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/about" className="sidebar-links" onClick={handleOpen}>
            About
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/projects" className="sidebar-links" onClick={handleOpen}>
            Projects
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/skills" className="sidebar-links" onClick={handleOpen}>
            Skills
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/contact" className="sidebar-links" onClick={handleOpen}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default function Navigation() {
  return (
    <>
      <NavBar />
      {/* <Sidebar /> */}
    </>
  );
}
