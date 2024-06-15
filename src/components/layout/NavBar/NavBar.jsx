import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.css";
import {
  HOME_ROUTE,
  EMPLOYEES_ROUTE,
  EMPLOYMENT_ROUTE,
  FAQ_ROUTE,
  CASES_ROUTE,
  SERVICES_ROUTE,
  REVIEWS_ROUTE,
  CONTACTS_ROUTE,
  SERVICES,
} from "@utils/constants";
import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as Arrow } from "@assets/arrow.svg";
import OutlinedButton from "@components/shared/OutlinedButton";

const NavBar = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <Logo className="navbar-logo" />
      <p>IISolutions</p>

      <ul className="navbar-menu">
        <li
          className="navbar-item"
          onMouseEnter={() => setIsHomeDropdownOpen(true)}
          onMouseLeave={() => setIsHomeDropdownOpen(false)}
        >
          <Link to={HOME_ROUTE} className="navbar-link">
            О нас
          </Link>
          <Arrow className="dropdown-arrow" />
          {isHomeDropdownOpen && (
            <div className="dropdown-wrapper">
              <ul className="dropdown">
                <li>
                  <Link to={EMPLOYEES_ROUTE} className="dropdown-link">
                    Сотрудники
                  </Link>
                </li>
                <li>
                  <Link to={EMPLOYMENT_ROUTE} className="dropdown-link">
                    Трудоустройство
                  </Link>
                </li>
                <li>
                  <Link to={FAQ_ROUTE} className="dropdown-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="navbar-item">
          <Link to={CASES_ROUTE} className="navbar-link">
            Кейсы
          </Link>
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <span className="navbar-link">Услуги</span>
          <Arrow className="dropdown-arrow" />
          {isServicesDropdownOpen && (
            <div className="dropdown-wrapper">
              <ul className="dropdown">
                {Object.keys(SERVICES).map((key) => (
                  <li key={key}>
                    <Link
                      to={`${SERVICES_ROUTE}/${key}`}
                      className="dropdown-link"
                    >
                      {SERVICES[key]?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className="navbar-item">
          <Link to={REVIEWS_ROUTE} className="navbar-link">
            Отзывы
          </Link>
        </li>
        <li className="navbar-item">
          <Link to={CONTACTS_ROUTE} className="navbar-link">
            Контакты
          </Link>
        </li>
      </ul>

      <OutlinedButton text="Оставить заявку" onClick={() => {}} />
    </nav>
  );
};

export default NavBar;
