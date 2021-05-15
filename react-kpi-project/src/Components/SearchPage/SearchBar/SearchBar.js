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
  const onSubmitBtnClick = () => {
    if (props.searchKey === null) {
      return;
    }
    if (!username.current) {
      //dispatch eror message with
    }
    dispatch(actions.fetchSearchData(username.current));
  };

  useEffect(onSubmitBtnClick, [props.searchKey]);

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
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm({
    defaultValue: {
      region: "default",
      area: "default",
      settlement: "default",
    },
  });

  // useEffect(() => {
  //   if (getValues().region === "default") {
  //     console.log("fetchRegion");
  //     dispatch(actions.fetchRegion());
  //   } else {
  //     console.log("regionSelect ",getValues().region);
  //     dispatch(
  //       actions.fetchArea(regions.find(region=>region.id===getValues().region))
  //     );
  //   }

  //   setValue("area" ,"default");
  //   setValue("settlement" ,"default");
  // }, [getValues().region]);

  // useEffect(() => {
  //   if (getValues().area === "default") {
  //     dispatch(
  //       actions.fetchArea(regions.find(region=>region.id===getValues().region))
  //     );
  //   } else {
  //     dispatch(
  //       actions.fetchSettlement(areas.find(area=>area.id===getValues().area))
  //     );
  //   }
  //   setValue("settlement" ,"default") ;
  // }, [getValues().area]);

  const currentRegion = watch().region;
  const currentArea = watch().area;
  const currentSettlement = watch().settlement;

  // useEffect(() => {
  //   console.table({ currentRegion, currentArea, currentSettlement });
  // }, [currentRegion, currentArea, currentSettlement]);

  const regions = useSelector((state) => state.search.region);
  const getRegionsHtml = () => {
    return regions.map((region) => (
      <option value={region.id}>{region.name}</option>
    ));
  };
  const areas = useSelector((state) => state.search.area);
  const getAreasHtml = () => {
    return areas.map((region) => (
      <option value={region.id}>{region.name}</option>
    ));
  };
  const settlements = useSelector((state) => state.search.settlement);
  const getSettlementsHtml = () => {
    return settlements.map((region) => (
      <option value={region.id}>{region.name}</option>
    ));
  };
  const onSubmitBtnClick = () => {
    if (props.searchKey === null) {
      return;
    }
    if (
      getValues().region === "default" ||
      getValues().area === "default" ||
      getValues().settlement === "default"
    ) {
      //error
    }
    dispatch(
      actions.fetchSearchData({
        region: regions[regions.indexOf(getValues().region)],
        area: areas[regions.indexOf(getValues().area)],
        settlement: settlements[regions.indexOf(getValues().settlement)],
        address: getValues().address,
      })
    );
  };
  useEffect(onSubmitBtnClick, [props.searchKey]);

  return (
    <form className="container-fluid d-grid gap-3">
      <select
        class="form-select"
        {...register("region")}
        aria-label="Default select example"
      >
        <option value="default" selected>
          Регіон
        </option>
        {getRegionsHtml()}
      </select>
      <select
        class="form-select"
        {...register("area")}
        aria-label="Default select example"
        disabled={getValues().region === "default" || !getValues().region}
      >
        <option value="default" selected>
          Район
        </option>
        {getAreasHtml()}
      </select>
      <select
        class="form-select"
        {...register("settlement")}
        disabled={getValues().area === "default" || !getValues().area}
        aria-label="Default select example"
      >
        <option value="default" selected>
          Населений пункт
        </option>
        {getSettlementsHtml()}
      </select>
      <input
        type="text"
        {...register("address")}
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Адреса"
      ></input>
    </form>
  );
};

const SearchByNameField = (props) => {
  const dispatch = useDispatch();

  const onSubmitBtnClick = () => {
    if (props.searchKey === null) {
      return;
    }
    if (!name.current) {
      //error
    }
    dispatch(actions.fetchSearchData(name.current));
  };
  const name = useRef("");
  useEffect(onSubmitBtnClick, [props.searchKey]);
  return (
    <div className="container-fluid d-grid gap-3">
      <input
        type="text"
        class="form-control"
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

  const onSubmitBtnClick = () =>
    handleSubmit((data) => {
      if (props.searchKey === null) {
        return;
      }
      if (
        !data.number &&
        !data.lastName &&
        !data.firstName &&
        !data.middleName
      ) {
        //dispatch eror message with
      }
      dispatch(actions.fetchSearchData(data));
    });
  useEffect(onSubmitBtnClick, [props.searchKey]);
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
                Пошук користувачів
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
