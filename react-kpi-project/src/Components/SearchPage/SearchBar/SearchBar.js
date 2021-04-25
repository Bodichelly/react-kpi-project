import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/redux/actions";
import {
  SWITCH_SEARCH_TYPE,
  SEARCH_BY_ADDRESS,
  SEARCH_BY_NAME,
  SEARCH_BY_NOTARY,
  SEARCH_ADMINISTRATOR,
  SEARCH_REGISTRATOR,
  SEARCH_USERS,
  ADMINISTRATOR
} from "src/redux/types";
import PropTypes from "prop-types";
// import styles from "./Loggin.module.scss";

const SearchUsers = (props) => {

  const dispatch = useDispatch();

  const searchUserType = useSelector((state) => state.search.searchUserType);

  const onUserTypeSelect = (userType) => {
    dispatch(actions.switchUserSearchType(userType));
  };

  return(
    <div className="container-fluid d-grid gap-3">
      <select class="form-select" aria-label="Default select example">
        <option selected={searchUserType==SEARCH_ADMINISTRATOR} onSelect={()=>{onUserTypeSelect(SEARCH_ADMINISTRATOR)}}>Адміністратори</option>
        <option selected={searchUserType==SEARCH_REGISTRATOR} onSelect={()=>{onUserTypeSelect(SEARCH_REGISTRATOR)}} >Реєстратори</option>
      </select>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ім'я користувача"></input>
    </div>
  )
}

const SearchByAddressField = (props) => {

  const regionSelect = useRef("default")
  const areaSelect = useRef("default")
  const settlementSelect = useRef("default")
  const addressInput = useRef("")

  const regions = useSelector((state) => state.search.region)
  const getRegionsHtml = () =>{
    return regions.map(region=><option value={region}>One</option>)
  }
  const areas = useSelector((state) => state.search.area)
  const getAreasHtml = () =>{
    return areas.map(region=><option value={region}>One</option>)
  }
  const settlements = useSelector((state) => state.search.settlement)
  const getSettlementsHtml = () =>{
    return settlements.map(region=><option value={region}>One</option>)
  }

  return (
    <div className="container-fluid d-grid gap-3">
      <select class="form-select" ref={regionSelect} aria-label="Default select example">
        <option value="default" selected>Регіон</option>
        {getRegionsHtml}
      </select>
      <select class="form-select" ref={areaSelect} aria-label="Default select example">
        <option value="default" selected>Район</option>
        {getAreasHtml}
      </select>
      <select class="form-select" ref={settlementSelect} aria-label="Default select example">
        <option value="default" selected>Населений пункт</option>
        {getSettlementsHtml}
      </select>
      <input type="text" ref={addressInput} class="form-control" id="exampleFormControlInput1" placeholder="Адреса"></input>
    </div>
  );
};

const SearchByNameField = (props) => {
  return (
    <div className="container-fluid d-grid gap-3">
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Назва закладу"></input>
    </div>
  );
};

const SearchByNotaryField = (props) => {
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

  const searchBarType = useSelector((state) => state.search.searchType);
  const currentUser = useSelector((state) => state.app.currentUser);

  const onSearchTypeSelect = (searchType) => {
    dispatch(actions.switchSearchType(searchType));
  };

  

  return (
    <div className="card bg-warning">
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
          { currentUser===ADMINISTRATOR ? <div className="form-check d-flex justify-content-start">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              checked={searchBarType == SEARCH_USERS}
              onClick={() => {
                onSearchTypeSelect(SEARCH_BY_NOTARY);
              }}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Пошук нотаріусу
            </label>
          </div>
: null}
          <hr class="dropdown-divider mb-3 mt-3"/>
          {searchBarType===SEARCH_BY_ADDRESS ? <SearchByAddressField/>: null}
          {searchBarType===SEARCH_BY_NOTARY ? <SearchByNotaryField/>: null}
          {searchBarType===SEARCH_BY_NAME ? <SearchByNameField/>: null}
          {searchBarType===SEARCH_USERS && currentUser===ADMINISTRATOR ? <SearchUsers/>: null}
          <hr class="dropdown-divider mb-3 mt-3"/>
          <button type="button" class="btn btn-warning w-100" >Пошук</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
