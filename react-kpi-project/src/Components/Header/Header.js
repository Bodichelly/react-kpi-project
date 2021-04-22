import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid row mx-auto">
          <a className="navbar-brand text-wrap col" href="#">
            Єдиний реєстр нотаріусів
          </a>
          <div className="col">
            <div className="row justify-content-end">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Головна
                </a>
              </li>
              <li className="nav-item dropdown" >
                
                  <a
                    className={"nav-link active dropdown-toggle "}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Пошук
                  </a>
                  <div elementtype="menu"  className={"dropdown-menu"} >
                    <a elementtype="item" className= "dropdown-item"  href="#">
                      Пошук державних нотаріальних контор
                    </a>

                    <a elementtype="item" className={ "dropdown-item"} href="#">
                      Пошук нотаріусів
                    </a>

                    <a elementtype="item" className={ "dropdown-item"} href="#">
                      Пошук за адресою
                    </a>
                  </div>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
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
