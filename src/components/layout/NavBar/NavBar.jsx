import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import OutlinedButton from "@components/shared/OutlinedButton";
import ModalForm from "@components/shared/ModalForm";

const NavBar = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <nav className="navbar">
      <Link to={HOME_ROUTE} className="logo-link">
        <Logo className="logo" />
      </Link>
      <p>IISolutions</p>

      <ul className="menu">
        <li
          className="item"
          onMouseEnter={() => setIsHomeDropdownOpen(true)}
          onMouseLeave={() => setIsHomeDropdownOpen(false)}
        >
          <Link to={HOME_ROUTE} className="link">
            О&nbsp;нас
          </Link>
          <ArrowIcon className="dropdown-arrow" />
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
        <li className="item">
          <Link to={CASES_ROUTE} className="link">
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
                    >
                      {SERVICES[key]?.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={PRICE_ROUTE} className="dropdown-link">
                    Прайс
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="item">
          <Link to={REVIEWS_ROUTE} className="link">
            Отзывы
          </Link>
        </li>
        <li className="item">
          <Link to={CONTACTS_ROUTE} className="link">
            Контакты
          </Link>
        </li>
      </ul>

      <OutlinedButton text="Оставить&nbsp;заявку" onClick={openModal} />
      <ModalForm showModal={showModal} closeModal={closeModal} />
    </nav>
  );
};

export default NavBar;
