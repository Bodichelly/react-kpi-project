import React, { useEffect, useRef, useState } from "react";
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
  ADMINISTRATOR,
} from "src/redux/types";
import { useForm } from "react-hook-form";
import randomStr from "src/utils/random";
// import styles from "./Loggin.module.scss";

const SearchUsers = (props) => {
  useEffect(onSubmitBtnClick, [props.searchKey]);
  const onSubmitBtnClick = () => {
    if (props.searchKey === null) {
      return;
    }
    if(!username.current){
      //dispatch eror message with
    }
    dispatch(actions.fetchSearchData(username.current));
  };

  const username = useRef("");
  const dispatch = useDispatch();

  const searchUserType = useSelector((state) => state.search.searchUserType);

  const onUserTypeSelect = (userType) => {
    dispatch(actions.switchUserSearchType(userType));
  };

  return (
    <div className="container-fluid d-grid gap-3">
      <select class="form-select" aria-label="Default select example">
        <option
          selected={searchUserType == SEARCH_ADMINISTRATOR}
          onSelect={() => {
            onUserTypeSelect(SEARCH_ADMINISTRATOR);
          }}
        >
          Адміністратори
        </option>
        <option
          selected={searchUserType == SEARCH_REGISTRATOR}
          onSelect={() => {
            onUserTypeSelect(SEARCH_REGISTRATOR);
          }}
        >
          Реєстратори
        </option>
      </select>
      <input
        type="text"
        class="form-control"
        placeholder="Ім'я користувача"
        ref={username}
      ></input>
    </div>
  );
};

const SearchByAddressField = (props) => {
  const dispatch = useDispatch()
  
  const onSubmitBtnClick = () => {
    if (props.searchKey === null) {
      return;
    }
    if(regionSelect.current==="default" || areaSelect.current==="default" || settlementSelect.current==="default"){
      //error
    }
    dispatch(actions.fetchSearchData({
      region: regionSelect.current,
      area: areaSelect.current,
      settlement: settlementSelect.current,
      address: addressInput.current
    }));
  };
  useEffect(onSubmitBtnClick, [props.searchKey]);
  const regionSelect = useRef("default");
  useEffect(()=>{
    if(regionSelect.current === "default"){
      dispatch(actions.fetchRegion())
    }else{
      dispatch(actions.fetchArea(regionSelect.current))
    }
    areaSelect.current = "default";
    settlementSelect.current = "default";
  }, [regionSelect])
  const areaSelect = useRef("default");
  useEffect(()=>{
    if(areaSelect.current === "default"){
      dispatch(actions.fetchArea(regionSelect.current))
    }else{
      dispatch(actions.fetchSettlement(areaSelect.current))
    }
    settlementSelect.current = "default";
  }, [areaSelect])
  const settlementSelect = useRef("default");
  const addressInput = useRef("");

  const regions = useSelector((state) => state.search.region);
  const getRegionsHtml = () => {
    return regions.map((region) => <option value={region}>One</option>);
  };
  const areas = useSelector((state) => state.search.area);
  const getAreasHtml = () => {
    return areas.map((region) => <option value={region}>One</option>);
  };
  const settlements = useSelector((state) => state.search.settlement);
  const getSettlementsHtml = () => {
    return settlements.map((region) => <option value={region}>One</option>);
  };

  return (
    <div className="container-fluid d-grid gap-3">
      <select
        class="form-select"
        ref={regionSelect}
        aria-label="Default select example"
      >
        <option value="default" selected>
          Регіон
        </option>
        {getRegionsHtml}
      </select>
      <select
        class="form-select"
        ref={areaSelect}
        aria-label="Default select example"
        disabled = {areaSelect.current==="default"}
      >
        <option value="default" selected>
          Район
        </option>
        {getAreasHtml}
      </select>
      <select
        class="form-select"
        ref={settlementSelect}
        disabled = {settlementSelect.current==="default"}
        aria-label="Default select example"
      >
        <option value="default" selected>
          Населений пункт
        </option>
        {getSettlementsHtml}
      </select>
      <input
        type="text"
        ref={addressInput}
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Адреса"
      ></input>
    </div>
  );
};

const SearchByNameField = (props) => {
  const dispatch = useDispatch();
  
  const onSubmitBtnClick = () => {
    if (props.searchKey === null) {
      return;
    }
    if(!name.current){
      //error
    }
    //dispatch
  };
  const name = useRef("");
  useEffect(onSubmitBtnClick, [props.searchKey]);
  return (
    <div className="container-fluid d-grid gap-3">
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Назва закладу"
      ></input>
    </div>
  );
};

const SearchByNotaryField = (props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(handleSubmit, [props.searchKey]);
  handleSubmit = (data) => {
    if (props.searchKey === null) {
      return;
    }
    if(!data.number && !data.lastName && !data.firstName && !data.middleName){
      //dispatch eror message with
    }
    dispatch(actions.fetchSearchData(data));
  };
  return (
    <form className="container-fluid d-grid gap-3">
      <input
        type="text"
        class="form-control"
        placeholder="Номер свідоцтва"
        {...register("number")}
      ></input>
      <input
        type="text"
        class="form-control"
        placeholder="Прізвище"
        {...register("lastName")}
      ></input>
      <input
        type="text"
        class="form-control"
        placeholder="Ім'я"
        {...register("firstName")}
      ></input>
      <input
        type="text"
        class="form-control"
        placeholder="По батькові"
        {...register("middleName")}
      ></input>
    </form>
  );
};

const SearchBar = () => {
  const dispatch = useDispatch();

  const [key, setKey] = useState(null);

  const searchBarType = useSelector((state) => state.search.searchType);
  const currentUser = useSelector((state) => state.app.currentUser);

  const onSearchTypeSelect = (searchType) => {
    setKey(null);
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
          {currentUser === ADMINISTRATOR ? (
            <div className="form-check d-flex justify-content-start">
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
          ) : null}
          <hr class="dropdown-divider mb-3 mt-3" />
          {searchBarType === SEARCH_BY_ADDRESS ? (
            <SearchByAddressField searchKey={key} />
          ) : null}
          {searchBarType === SEARCH_BY_NOTARY ? (
            <SearchByNotaryField searchKey={key} />
          ) : null}
          {searchBarType === SEARCH_BY_NAME ? (
            <SearchByNameField searchKey={key} />
          ) : null}
          {searchBarType === SEARCH_USERS && currentUser === ADMINISTRATOR ? (
            <SearchUsers />
          ) : null}
          <hr class="dropdown-divider mb-3 mt-3" />
          <button
            type="button"
            class="btn btn-warning w-100"
            onClick={() => {
              setKey(randomStr());
            }}
          >
            Пошук
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
