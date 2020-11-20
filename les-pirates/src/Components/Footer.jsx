import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="myFooter">
        <img
          src="https://www.cmonsite.fr/creer-un-site/wp-content/uploads/2013/03/facebook-icone-CmonSite.png"
          alt="Facebook-icone"
          className="icone"
        />
        <img
          src="https://www.cmonsite.fr/creer-un-site/wp-content/uploads/2013/03/twitter-CmonSite.png"
          alt="Twitter-icone"
          className="icone"
        />
        <img
          src="https://www.cmonsite.fr/creer-un-site/wp-content/uploads/2019/01/logo-instagram-300x300.png"
          alt="Instagram-icone"
          className="icone"
        />
        <p>Site & content created by The Corsairs</p>
        <p>Copyright © 1756-1757</p>
        <p>All rights reserved</p>
        <p></p>
      </div>
    </footer>
  );
}

export default Footer;
