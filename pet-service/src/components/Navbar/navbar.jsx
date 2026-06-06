import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5f69b952f912e8000177e614/0x0.png"
            alt="Tailmate Logo"
            className="logo-img"
          />
          <span className="logo-text">Tailmate</span>
        </Link>

        <div className="mobile-icons">
          <Link to="/profileform" onClick={closeMobileMenu} className="icon-button">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="toggle-button" aria-label="Toggle navigation menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/home" onClick={closeMobileMenu}>Home</Link>
          <Link to="/aboutus" onClick={closeMobileMenu}>About</Link>
          <Link to="/petevents" onClick={closeMobileMenu}>Pet Events</Link>
          <Link to="/petfriendlycafs" onClick={closeMobileMenu}>Pet-friendly Cafés</Link>
          <div className="dropdown">
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="dropdown-toggle">
              Our Services
            </button>
            {isServicesOpen && (
              <div className="dropdown-menu">
                <Link to="/petticket" onClick={closeMobileMenu}>Pet Ticketing</Link>
                <Link to="/book-appointment" onClick={closeMobileMenu}>Medical Service</Link>
                <Link to="/petgrooming" onClick={closeMobileMenu}>Pet Grooming</Link>
                <Link to="/buysellpage" onClick={closeMobileMenu}>Buy or Sell</Link>
                <Link to="/petmating" onClick={closeMobileMenu}>Pet Mating</Link>
              </div>
            )}
          </div>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          <Link to="/profileform" className="profile-icon" onClick={closeMobileMenu}>
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
