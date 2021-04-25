import React, { useState } from "react";
import PropTypes from "prop-types";
import { loaderWrapper, loader, book, inner, left, middle, right } from "./Loader.module.css";

const Loader = () => {
  return (
    
      <div className={loader}>
        <div className={book}>
          <div className={inner}>
            <div className={left}></div>
            <div className={middle}></div>
            <div className={right}></div>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
  );
};

export default Loader;
