import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/redux/actions";

const PrivateNotaryPage = () => {
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

  const firstName = useRef("");
  const lastName = useRef("");
  const middleName = useRef("");
  const licenceNumber = useRef("");
  const region = useRef("");
  const area = useRef("");
  const settlement = useRef("");
  const address = useRef("");
  const [isPrivateNotary, setPrivateNotary] = useState(true);
  const position = useRef("");
  const name = useRef("");
  const phoneNumber = useRef("");

  const currentFirstName = watch().firstName;
  const currentLastName = watch().lastName;
  const currentMiddleName = watch().middleName;
  const currentLicenceNumber = watch().licenceNumber;
  const currentRegion = watch().region;
  const currentArea = watch().area;
  const currentSettlement = watch().settlement;
  const currentAddress = watch().address;

  const currentPosition = watch().position;
  const currentName = watch().name;
  const currentPhoneNumber = watch().phoneNumber;


  const onSubmitBtnClick = () => {
    const resultData = {
      currentFirstName,
      currentLastName,
      currentMiddleName,
      currentLicenceNumber,
      currentRegion,
      currentArea,
      currentSettlement,
      currentAddress,

      currentPosition,
      currentName,
      currentPhoneNumber,

    }
    console.log(resultData);
  }
  //   handleSubmit((data) => {
  //     const resultData = {
  //       currentFirstName,
  //       currentLastName,
  //       currentMiddleName,
  //       currentLicenceNumber,
  //       currentRegion,
  //       currentArea,
  //       currentSettlement,
  //       currentAddress,

  //       currentPosition,
  //       currentName,
  //       currentPhoneNumber,

  //     }
  //     console.log(resultData)
  //   });
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
          <h2>
            {notaryId
              ? "Внесення змін про нотаріус до рєстру"
              : "Внесення нового нотаріусу до рєстру"}
          </h2>
          <form onSubmit={handleSubmit(onSubmitBtnClick)}>
            <div className="row">
              <div className="col-md gap-3">
                <div className="container-fluid d-grid gap-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Прізвище
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Прізвище"
                      {...register("lastName", { required: true })}
                    //ref={lastName}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Ім'я
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ім'я"
                      {...register("firstName", { required: true })}
                    //ref={firstName}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      По-батькові
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="По батькові"
                      {...register("middleName", { required: true })}
                    //ref={middleName}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Номер ліцензії
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Номер ліцензії"
                      {...register("licenceNumber", { required: true })}
                    //ref={licenceNumber}
                    />
                  </div>
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
                    //ref={area}
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
                    //ref={settlement}
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
                <div className="form-check d-flex justify-content-start">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="privateNotary"
                    checked={isPrivateNotary}
                    onClick={() => {
                      setPrivateNotary(true);
                    }}
                  />
                  <label className="form-check-label" htmlFor="privateNotary">
                    Приватний нотаріус
                  </label>
                </div>
                <div className="form-check d-flex justify-content-start">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="stateNotary"
                    checked={!isPrivateNotary}
                    onClick={() => {
                      setPrivateNotary(false);
                    }}
                  />
                  <label className="form-check-label" htmlFor="stateNotary">
                    Державна нотаріальна контора / архів
                  </label>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Посада
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Посада"
                    {...register("possition")}
                    //ref={position}
                    disabled={isPrivateNotary}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Назва державної нотаріальної контори / архіву
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Назва"
                    {...register("name")}
                    //ref={name}
                    disabled={isPrivateNotary}
                    list="datalistOptions"
                  />
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="phoneNumber"
                    className="form-label"
                  >
                    Робочий телефон
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Робочий телефон"
                    //ref={phoneNumber}
                    {...register("phoneNumber", {
                      required: false,
                      minLength: 6,
                      maxLength: 20,
                    })}
                  />
                </div>
                <button type="submit" className="btn btn-info w-100">
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

export default PrivateNotaryPage;
