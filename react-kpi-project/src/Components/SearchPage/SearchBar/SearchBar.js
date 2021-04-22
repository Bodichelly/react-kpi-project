import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import actions from 'src/redux/actions'
import {
  SWITCH_SEARCH_TYPE,
  SEARCH_BY_ADDRESS,
  SEARCH_BY_NAME,
  SEARCH_BY_NOTARY
} from 'src/redux/types'
import PropTypes from "prop-types";
// import styles from "./Loggin.module.scss";

const SearchBar = () => {
  const dispatch = useDispatch()

  const searchBarTitle = useSelector(state => state.app.loadingUsers)

  const onSearchTypeSelect = (searchType) =>{
    dispatch(actions.switchSearchType(searchType));
  }

  return (
    <div className="card bg-primary">
      <div className="card-body bg-light m-1">
        <h3 className="card-title">Пошук</h3>
        <div className="flex-column">
          <div className="form-check d-flex justify-content-start">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Пошук за адресою
            </label>
          </div>
          <div className="form-check d-flex justify-content-start">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Пошук за назвою
            </label>
          </div>
          <div className="form-check d-flex justify-content-start">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Пошук нотаріусу
            </label>
          </div>
        </div>
        </div>
    </div>
  );
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
