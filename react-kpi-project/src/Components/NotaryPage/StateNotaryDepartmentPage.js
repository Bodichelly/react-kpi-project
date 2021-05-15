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

  return (
    <div className="container-md mt-1">
      <div className="card bg-warning">
        <div className="card-body bg-light m-1">
          <h2>Державний нотаріальний заклад</h2>
          <form>
            <div className="row">
              <div className="col-md gap-3">
                <div className="mt-4 mb-4">
                  <div className="form-check d-flex justify-content-start">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
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
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Державний нотаріальний архів
                    </label>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Назва державної нотаріальної контори / архіву
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Адреса"
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
                  />
                </div>
              </div>

              <div className="col-md gap-3">
                <div className="container-fluid d-grid gap-3">
                  <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      Регіон
                    </label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Регіон</option>
                      {getRegionsHtml()}
                    </select>
                  </div>
                  <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      Район
                    </label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Район</option>
                      {getAreasHtml()}
                    </select>
                  </div>
                  <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      Населений пункт
                    </label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Населений пункт</option>
                      {getSettlementsHtml()}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Адреса
                    </label>

                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Адреса"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid d-flex justify-content-center">
              <div className="col-8  d-grid gap-3">
                <button type="button" class="btn btn-info w-100">
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
