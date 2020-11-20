import React, { useState } from "react";
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
        <h1>Les Corsaire</h1>
      </div>
      <ul className={open ? "navLinks open" : "navLinks fermer"}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Product">Product</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#AboutUs">AboutUs</a>
        </li>
        <li>
          <a href="#ContactUs">ContactUs</a>
        </li>
      </ul>
      <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
    </nav>
  );
}
export default Header;
