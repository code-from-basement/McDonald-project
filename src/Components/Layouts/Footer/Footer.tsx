import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";
import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerContainer}>
      <div className={Styles.footer__nav_section}>
        <p>footer nav section</p>
      </div>
      <div className={Styles.footer__promotion}>
        <div className={Styles.footer__promotion_social}>
          social media
        </div>
        <div className={Styles.footer__promotion_apps}>
          <img src="src/assets//Image//footerImages//app-store-logo.png" alt="app-store-logo" />
          <img src="src/assets//Image//footerImages//Google-Play-Logo-PNG-Photos.png" alt="google-play-logo" />
        </div>
      </div>
      <hr />
      <div className={Styles.footer__legal}>
        <div className={Styles.footer__legal_links}>
          <Link to="/countryselector">Country Selector</Link>
          <Link to="/contactus">Contact us</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>
        <div className={Styles.footer__legal_copyright}>
          <img src="src/assets//Image//Icon//macdonaldPNG.png" alt="logo" />
          <p className={Styles.copyright}>{`© ${year} McDonald's. All Rights Reserved`}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
