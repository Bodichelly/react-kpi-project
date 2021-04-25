import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Loggin.module.scss";

const Loggin = () => {

  const [message, setMessage] = useState("");
  



  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card bg-warning">
          <div className="card-body bg-light m-1">
            <h5 className="card-title">Вхід в систему</h5>
            <div className="mb-3">
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
            <div className="mb-3">
              <label for="inputPassword" class="form-label">
                Пароль
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Secret phrase"
              />
            </div>
            <div className="mb-3 mb-0">
              <p className="text-center">
                {message}
              </p>
            </div>
            <div className="mb-3 mb-0">
              <button type="button" className="btn btn-success w-100">
                Увійти
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

Loggin.propTypes = {};

Loggin.defaultProps = {};

export default Loggin;
