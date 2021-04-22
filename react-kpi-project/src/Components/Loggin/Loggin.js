import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Loggin.module.scss";

const Loggin = () => {

  const [message, setMessage] = useState("");
  



  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className={styles.Loggin}>
        <div elementType="card" className={"card border-info "}>
          <div class="card-body">
            <h5 class="card-title">Вхід в систему</h5>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Електронна адреса
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">
                Пароль
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Secret phrase"
              />
            </div>
            <div class="mb-3 mb-0">
              <p class="text-center">
                {message}
              </p>
            </div>
            <div class="mb-3 mb-0">
              <button type="button" class="btn btn-success w-75">
                Увійти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Loggin.propTypes = {};

Loggin.defaultProps = {};

export default Loggin;
