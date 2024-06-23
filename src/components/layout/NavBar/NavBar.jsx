import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.styles.scss";
import {
  HOME_ROUTE,
  EMPLOYEES_ROUTE,
  EMPLOYMENT_ROUTE,
  FAQ_ROUTE,
  CASES_ROUTE,
  SERVICES_ROUTE,
  PRICE_ROUTE,
  REVIEWS_ROUTE,
  CONTACTS_ROUTE,
  SERVICES,
} from "@utils/constants";
import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import { ReactComponent as MenuIcon } from "@assets/menu.svg";
import { ReactComponent as CloseIcon } from "@assets/close.svg";
import OutlinedButton from "@components/shared/OutlinedButton";
import ModalForm from "@components/shared/ModalForm";

const NavBar = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = () => {
    setIsHomeDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <div className="navbar-base"></div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to={HOME_ROUTE} className="logo-link" onClick={handleLinkClick}>
            <Logo className="logo" />
          </Link>
          <p>IISolutions</p>
        </div>

        <ul className="desktop-menu">
          <li
            className="item"
            onMouseEnter={() => setIsHomeDropdownOpen(true)}
            onMouseLeave={() => setIsHomeDropdownOpen(false)}
          >
            <Link to={HOME_ROUTE} className="link" onClick={handleLinkClick}>
              О&nbsp;нас
            </Link>
            <ArrowIcon className="dropdown-arrow" />
            {isHomeDropdownOpen && (
              <div className="dropdown-wrapper">
                <ul className="dropdown">
                  <li>
                    <Link
                      to={EMPLOYEES_ROUTE}
                      className="dropdown-link"
                      onClick={handleLinkClick}
                    >
                      Сотрудники
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={EMPLOYMENT_ROUTE}
                      className="dropdown-link"
                      onClick={handleLinkClick}
                    >
                      Трудоустройство
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={FAQ_ROUTE}
                      className="dropdown-link"
                      onClick={handleLinkClick}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="item">
            <Link to={CASES_ROUTE} className="link" onClick={handleLinkClick}>
              Кейсы
            </Link>
          </li>
          <li
            className="item"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <span className="link">Услуги</span>
            <ArrowIcon className="dropdown-arrow" />
            {isServicesDropdownOpen && (
              <div className="dropdown-wrapper">
                <ul className="dropdown">
                  {Object.keys(SERVICES).map((key) => (
                    <li key={key}>
                      <Link
                        to={`${SERVICES_ROUTE}/${key}`}
                        className="dropdown-link"
                        onClick={handleLinkClick}
                      >
                        {SERVICES[key]?.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to={PRICE_ROUTE}
                      className="dropdown-link"
                      onClick={handleLinkClick}
                    >
                      Прайс
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="item">
            <Link to={REVIEWS_ROUTE} className="link" onClick={handleLinkClick}>
              Отзывы
            </Link>
          </li>
          <li className="item">
            <Link
              to={CONTACTS_ROUTE}
              className="link"
              onClick={handleLinkClick}
            >
              Контакты
            </Link>
          </li>
        </ul>

        <OutlinedButton text="Оставить&nbsp;заявку" onClick={openModal} />

        {/* for mobile version */}
        <div
          className="menu-icon"
          onClick={() => {
            if (isMobileMenuOpen) {
              setIsServicesDropdownOpen(false);
            }
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="icon" />
          ) : (
            <MenuIcon className="icon" />
          )}
        </div>
      </nav>
      {isMobileMenuOpen && (
        <ul className="mobile-menu">
          <li className="item">
            <Link
              to={EMPLOYEES_ROUTE}
              className="link"
              onClick={handleLinkClick}
            >
              Сотрудники
            </Link>
          </li>
          <li className="item">
            <Link
              to={EMPLOYMENT_ROUTE}
              className="link"
              onClick={handleLinkClick}
            >
              Трудоустройство
            </Link>
          </li>
          <li className="item">
            <Link to={FAQ_ROUTE} className="link" onClick={handleLinkClick}>
              FAQ
            </Link>
          </li>
          <li className="item">
            <Link to={CASES_ROUTE} className="link" onClick={handleLinkClick}>
              Кейсы
            </Link>
          </li>
          <li
            className="item"
            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
          >
            <span className="link">
              Услуги
              <ArrowIcon
                className={`dropdown-arrow ${isServicesDropdownOpen ? "open" : ""}`}
              />
            </span>
          </li>
          {isServicesDropdownOpen && (
            <div>
              {Object.keys(SERVICES).map((key) => (
                <li key={key} className="item">
                  <Link
                    to={`${SERVICES_ROUTE}/${key}`}
                    className="dropdown-link"
                    onClick={handleLinkClick}
                  >
                    {SERVICES[key]?.name}
                  </Link>
                </li>
              ))}
              <li className="item">
                <Link
                  to={PRICE_ROUTE}
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Прайс
                </Link>
              </li>
            </div>
          )}
          <li className="item">
            <Link to={REVIEWS_ROUTE} className="link" onClick={handleLinkClick}>
              Отзывы
            </Link>
          </li>
          <li className="item">
            <Link
              to={CONTACTS_ROUTE}
              className="link"
              onClick={handleLinkClick}
            >
              Контакты
            </Link>
          </li>
        </ul>
      )}

      <ModalForm showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default NavBar;
