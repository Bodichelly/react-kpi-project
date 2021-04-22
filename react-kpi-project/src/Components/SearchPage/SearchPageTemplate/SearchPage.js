import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchBar from "../SearchBar/SearchBar"

// import styles from "./Loggin.module.scss";

const SearchPage = () => {

  const [message, setMessage] = useState("");
  



  return (
    <div className="container-md mt-1">
      <div className="row">
         {/* <SearchBar class="col-4"></SearchBar> */}
         <div className="col-sm-4"><SearchBar class="col-4"></SearchBar></div>
         <div className="col-sm-8">
           <div className="card">asdasd</div>
         </div>
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
