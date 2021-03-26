import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid row mx-auto">
          <a class="navbar-brand text-wrap col" href="#">
            Єдиний реєстр нотаріусів
          </a>
          <div class="col">
            <div class="row justify-content-end">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Головна
                </a>
              </li>
              <li class="nav-item dropdown" >
                
                  <a
                    className={"nav-link active dropdown-toggle "}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Пошук
                  </a>
                  <div elementType="menu"  className={"dropdown-menu"} >
                    <a elementType="item" class= "dropdown-item"  href="#">
                      Пошук державних нотаріальних контор
                    </a>

                    <a elementType="item" className={ "dropdown-item"} href="#">
                      Пошук нотаріусів
                    </a>

                    <a elementType="item" className={ "dropdown-item"} href="#">
                      Пошук за адресою
                    </a>
                  </div>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
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
