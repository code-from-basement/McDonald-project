import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";
import React from "react";
import { FacebookRoundedIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from "../../UI/IconsLibrary/IconsLibrary";

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
          <button><FacebookRoundedIcon/></button>
          <button><TwitterIcon/></button>
          <button><InstagramIcon/></button>
          <button><YouTubeIcon/></button>
        </div>
        <div className={Styles.footer__promotion_apps}>
          <img src="src/assets//Image//footerImages//app-store.png" alt="app-store-logo" />
          <img src="src/assets//Image//footerImages//google-play.png" alt="google-play-logo" />
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
