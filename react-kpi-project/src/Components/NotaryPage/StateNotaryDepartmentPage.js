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
import { useParams } from "react-router-dom";

const StateNotaryDepartmentPage = () => {
  let { notaryId } = useParams();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm();

  const currentDepartmentName = watch().departmentName;
  const currentRegion = watch().region;
  const currentArea = watch().area;
  const currentSettlement = watch().settlement;
  const currentAddress = watch().address;
  const currentPhoneNumber = watch().phoneNumber;


  const onSubmitBtnClick = () => {
    const resultData = {
      name: currentDepartmentName,
      regionId: currentRegion,
      areaId: currentArea,
      localityId: currentSettlement,
      address: currentAddress,
      phoneNumbers: [currentPhoneNumber],
    }

    if (!!notaryId) {
      resultData.id = notaryId;
      dispatch(actions.updateNotaryDepartment(resultData));
    } else {
      dispatch(actions.addNewNotaryDepartment(resultData));
    }

  }

  useEffect(() => {
    if (!!notaryId) {
      dispatch(actions.searchNotaryById(notaryId));
    }
    dispatch(actions.fetchAllOrganizations())
  }, []);
  useEffect(() => {
    if (currentRegion === "default") {
      dispatch(actions.fetchRegion());
    } else {
      dispatch(actions.fetchArea(currentRegion));
    }
    setValue("area", "default");
    setValue("settlement", "default");
  }, [currentRegion]);

  useEffect(() => {
    if (currentArea === "default") {
      dispatch(actions.fetchArea(currentRegion));
    } else {
      dispatch(actions.fetchSettlement(currentArea));
    }
    setValue("settlement", "default");
  }, [currentArea]);

  const currentNotaryDepartment = useSelector((state) => state.search.currentNotaryDepartment);

  useEffect(() => {
    if (!!notaryId) {
      setValue("departmentName", currentNotaryDepartment.name || "");
      setValue("region", currentNotaryDepartment.region || "default");
      setValue("area", currentNotaryDepartment.area || "default");
      setValue("settlement", currentNotaryDepartment.settlement || "default");
      setValue("address", currentNotaryDepartment.address || "");
      setValue("phoneNumber", currentNotaryDepartment.phoneNumbers[0]);
    }
  }, [currentNotaryDepartment])

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

  const validateDropDown = (value) => value !== "default";


  return (
    <div className="container-md mt-1">
      <div className="card bg-warning">
        <div className="card-body bg-light m-1">
          <h2>Державний нотаріальний заклад</h2>
          <form onSubmit={handleSubmit(onSubmitBtnClick)}>
            <div className="row">
              <div className="col-md gap-3">
                {/* <div className="mt-4 mb-4">
                  <div className="form-check d-flex justify-content-start">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked={isDepartmentArchive}
                      onClick={() => {
                        setDepartmentArchive(false);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Державна нотаріальна контора
                    </label>
                  </div>
                  <div className="form-check d-flex justify-content-start">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked={isDepartmentArchive}
                      onClick={() => {
                        setDepartmentArchive(true);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Державний нотаріальний архів
                    </label>
                  </div>
                </div> */}

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Назва державної нотаріальної контори / архіву
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Назва закладу"
                    {...register("departmentName", { required: true })}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Робочий телефон
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Робочий телефон"
                    {...register("phoneNumber", { required: true })}
                  />
                </div>
              </div>

              <div className="col-md gap-3">
                <div className="container-fluid d-grid gap-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Регіон
                    </label>

                    <select
                      className="form-select"
                      aria-label="Default select example"
                      {...register("region", { required: true, validate: validateDropDown })}
                      //ref={region}
                      placeholder="Регіон"
                    >
                      <option selected value="default">Регіон</option>
                      {getRegionsHtml()}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Район
                    </label>

                    <select
                      className="form-select"
                      aria-label="Default select example"
                      {...register("area", { required: true, validate: validateDropDown })}
                      disabled={currentRegion === "default"}
                    >
                      <option selected value="default">Район</option>
                      {getAreasHtml()}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Населений пункт
                    </label>

                    <select
                      className="form-select"
                      aria-label="Default select example"
                      {...register("settlement", { required: true, validate: validateDropDown })}
                      disabled={currentArea === "default" || currentRegion === "default"}
                    >
                      <option selected value="default">Населений пункт</option>
                      {getSettlementsHtml()}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Адреса
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Адреса"
                      {...register("address", { required: true })}
                    //ref={address}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid d-flex justify-content-center">
              <div className="col-8  d-grid gap-3">
                <button type="submit" class="btn btn-info w-100">
                  Підтвердити
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StateNotaryDepartmentPage;
