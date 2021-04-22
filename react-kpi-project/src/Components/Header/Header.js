import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

const Header = () => {
  const [modifier, setModifier] = useState("");

  const collapseNavbar = () => {
    modifier ? setModifier("") : setModifier("show");
  };

  return (
    <header className={styles.Header}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand text-wrap col" href="/#">
            Єдиний реєстр нотаріусів
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={collapseNavbar}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            className={
              "collapse navbar-collapse justify-content-end " + modifier
            }
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-center" onClick={collapseNavbar}  aria-current="page" href="#">
                  Головна
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={"nav-link active dropdown-toggle text-center"}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Пошук
                </a>
                <div elementtype="menu" className={"dropdown-menu"}>
                  <a elementtype="item" className="dropdown-item" href="#" onClick={collapseNavbar}>
                    Пошук державних нотаріальних контор
                  </a>

                  <a elementtype="item" className={"dropdown-item"} href="#" onClick={collapseNavbar}>
                    Пошук нотаріусів
                  </a>

                  <a elementtype="item" className={"dropdown-item"} href="#" onClick={collapseNavbar}>
                    Пошук за адресою
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-center" href="#" onClick={collapseNavbar}>
                  Допомога
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
