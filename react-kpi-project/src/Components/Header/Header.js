import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.scss";
import actions from "src/redux/actions";
import { Link } from "react-router-dom";
import {
  SEARCH_BY_ADDRESS,
  SEARCH_BY_NAME,
  SEARCH_BY_NOTARY,
  ADMINISTRATOR,
} from "src/redux/types";
import { SEARCH_USERS } from "../../redux/types";

const Header = () => {
  const dispatch = useDispatch();

  const [modifier, setModifier] = useState("");

  const collapseNavbar = () => {
    modifier ? setModifier("") : setModifier("show");
  };

  const currentUser = useSelector((state) => state.app.currentUser);

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
                <Link
                  className="nav-link active text-center"
                  onClick={collapseNavbar}
                  aria-current="page"
                  to="/"
                >
                  Головна
                </Link>
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
                  <Link
                    elementtype="item"
                    className="dropdown-item"
                    to="/search"
                    onClick={() => {
                      dispatch(actions.switchSearchType(SEARCH_BY_NAME));
                      collapseNavbar();
                    }}
                  >
                    Пошук державних нотаріальних контор
                  </Link>

                  <Link
                    elementtype="item"
                    className={"dropdown-item"}
                    to="/search"
                    onClick={() => {
                      dispatch(actions.switchSearchType(SEARCH_BY_NOTARY));
                      collapseNavbar();
                    }}
                  >
                    Пошук нотаріусів
                  </Link>

                  <Link
                    elementtype="item"
                    className={"dropdown-item"}
                    to="/search"
                    onClick={() => {
                      dispatch(actions.switchSearchType(SEARCH_BY_ADDRESS));
                      collapseNavbar();
                    }}
                  >
                    Пошук за адресою
                  </Link>
                  {currentUser === ADMINISTRATOR ? (
                    <Link
                      elementtype="item"
                      className={"dropdown-item"}
                      to="/search"
                      onClick={() => {
                        dispatch(actions.switchSearchType(SEARCH_USERS));
                        collapseNavbar();
                      }}
                    >
                      Пошук користувачів
                    </Link>
                  ) : null}
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-center"
                  to="/help"
                  onClick={collapseNavbar}
                >
                  Допомога
                </Link>
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
