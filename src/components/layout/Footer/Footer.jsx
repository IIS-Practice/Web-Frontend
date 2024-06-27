import React from "react";
import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as TelegramIcon } from "@assets/telegram.svg";
import { ReactComponent as InstagramIcon } from "@assets/instagram.svg";
import { ReactComponent as WhatsappIcon } from "@assets/whatsapp.svg";
import { ReactComponent as LinkedinIcon } from "@assets/linkedin.svg";
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
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <TelegramIcon className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <InstagramIcon className="social-icon" />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <WhatsappIcon className="social-icon" />
          </a>
          <a
            href="https://linkedln.ru/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedinIcon className="social-icon" />
          </a>
          <a
            href="https://viber.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Viber"
          >
            <ViberIcon className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-column">
          <p>ООО “Информационные инновационные решения”</p>
          <p>УНП 193711547</p>
        </div>
        <div className="footer-column">
          <p>+375 (29) 676-45-10</p>
          <p>почта@почта</p>
          <p>г. Минск, ул. Кропоткина, д. 44</p>
          <p>Пн-пт с 9:00 до 17:00</p>
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
