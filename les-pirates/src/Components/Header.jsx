import React from "react";
import "./Header.css";
function Header() {
  return (
    <nav>
      <div className="title">
        <h1>Les Corsaire</h1>
      </div>
      <img
        className="logo"
        src="https://tomato.to/tmp/5fb695876c73c.jpg"
        alt="Pirate symbol"
      />
      <ul className="navLinks">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Product</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>AboutUs</a>
        </li>
      </ul>
      <i class="fas fa-bars"></i>
    </nav>
  );
}
export default Header;
