import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <img
        className="logo"
        src="http://www.thewayofthepirates.com/images/thewayofthepirates/picture-of-flag-of-pirate-edward-england-thumb.jpg"
        alt="Pirate symbol"
      />
      <div className="title">
        <h1>The Corsairs</h1>
      </div>
      <ul className={open ? "navLinks open" : "navLinks fermer"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Pirates">All Pirates</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>
      <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
    </nav>
  );
}
export default Header;
