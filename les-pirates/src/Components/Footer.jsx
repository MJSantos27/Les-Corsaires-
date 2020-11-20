import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="myFooter">
        <p className="align-left">Site & content created by The Corsairs</p>
        <div className="All-icones">
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
        </div>

        <p className="align-right">
          Copyright © 1756-1757 - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
