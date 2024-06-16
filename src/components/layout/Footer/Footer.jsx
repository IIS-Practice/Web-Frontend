import React from "react";
import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as InstagramIcon } from "@assets/instagram.svg";
import { ReactComponent as TelegramIcon } from "@assets/telegram.svg";
import { ReactComponent as ViberIcon } from "@assets/viber.svg";
import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <Logo className="footer-logo" />
          <p>IISolutions</p>
        </div>
        <div className="footer-right">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="social-icon" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon className="social-icon" />
          </a>
          <a href="https://viber.com" target="_blank" rel="noopener noreferrer">
            <ViberIcon className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-column">
          <p>ООО “Информационные инновационные решения”</p>
          <p>УНП *********</p>
        </div>
        <div className="footer-column">
          <p>+375 (**) ***-**-**</p>
          <p>почта@почта</p>
          <p>индекс, адрес</p>
          <p>время работы</p>
        </div>
        <div className="footer-column">
          <p>Copyright c 2024 IISolutions</p>
          <p>All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
