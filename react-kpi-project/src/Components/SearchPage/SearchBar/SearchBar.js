import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/redux/actions";
import {
  SWITCH_SEARCH_TYPE,
  SEARCH_BY_ADDRESS,
  SEARCH_BY_NAME,
  SEARCH_BY_NOTARY,
} from "src/redux/types";
import PropTypes from "prop-types";
// import styles from "./Loggin.module.scss";

const SearchByAddressField = () => {
  return (
    <div className="container-fluid d-grid gap-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Регіон</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <option selected>Район</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <option selected>Населений пункт</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Адреса"></input>
    </div>
  );
};

const SearchByNameField = () => {
  return (
    <div className="container-fluid d-grid gap-3">
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Назва закладу"></input>
    </div>
  );
};

const SearchByNotaryField = () => {
  return (
    <div className="container-fluid d-grid gap-3">
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Номер свідоцтва"></input>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Прізвище"></input>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ім'я"></input>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="По батькові"></input>
    </div>
  );
};



const SearchBar = () => {
  const dispatch = useDispatch();

  const searchBarType = useSelector((state) => state.app.searchType);

  const onSearchTypeSelect = (searchType) => {
    dispatch(actions.switchSearchType(searchType));
  };

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
              checked={searchBarType == SEARCH_BY_ADDRESS}
              onClick={() => {
                onSearchTypeSelect(SEARCH_BY_ADDRESS);
              }}
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
              checked={searchBarType == SEARCH_BY_NAME}
              onClick={() => {
                onSearchTypeSelect(SEARCH_BY_NAME);
              }}
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
              checked={searchBarType == SEARCH_BY_NOTARY}
              onClick={() => {
                onSearchTypeSelect(SEARCH_BY_NOTARY);
              }}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Пошук нотаріусу
            </label>
          </div>
          <hr class="dropdown-divider mb-3 mt-3"/>
          {searchBarType===SEARCH_BY_ADDRESS ? <SearchByAddressField/>: null}
          {searchBarType===SEARCH_BY_NOTARY ? <SearchByNotaryField/>: null}
          {searchBarType===SEARCH_BY_NAME ? <SearchByNameField/>: null}
          <hr class="dropdown-divider mb-3 mt-3"/>
          <button type="button" class="btn btn-warning w-100">Пошук</button>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
