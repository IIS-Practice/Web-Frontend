import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.css";
import {
  HOME_ROUTE,
  EMPLOYEES_ROUTE,
  CASES_ROUTE,
  SERVICES_ROUTE,
  REVIEWS_ROUTE,
  CONTACTS_ROUTE,
  FAQ_ROUTE,
} from "@utils/constants";

const NavBar = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={HOME_ROUTE}>Logo</Link>
      </div>
      <ul className="navbar-menu">
        <li
          className="navbar-item"
          onMouseEnter={() => setIsHomeDropdownOpen(true)}
          onMouseLeave={() => setIsHomeDropdownOpen(false)}
        >
          <Link to={HOME_ROUTE} className="navbar-link">
            О нас
          </Link>
          {isHomeDropdownOpen && (
            <ul className="dropdown">
              <li>
                <Link to={EMPLOYEES_ROUTE} className="dropdown-link">
                  Сотрудники
                </Link>
              </li>
            </ul>
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
          {isServicesDropdownOpen && (
            <ul className="dropdown">
              <li>
                <Link to={SERVICES_ROUTE + "\\1"} className="dropdown-link">
                  Услуга 1
                </Link>
              </li>
              <li>
                <Link to={SERVICES_ROUTE + "\\2"} className="dropdown-link">
                  Услуга 2
                </Link>
              </li>
              <li>
                <Link to={SERVICES_ROUTE + "\\3"} className="dropdown-link">
                  Услуга 3
                </Link>
              </li>
            </ul>
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
        <li className="navbar-item">
          <Link to={FAQ_ROUTE} className="navbar-link">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
