import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/redux/actions";
const PrivateNotaryPage = () => {
  let { notaryId } = useParams();
  const dispatch = useDispatch();

  const firtName = useRef("");
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitBtnClick = () =>
    handleSubmit((data) => {
      // const resultData = {
      //   firstName
      //   lastName
      //   middleName
      //   certificateNumber
      //   isPrivate
      //   phoneNumbers
      //   regionId
      //   areaId
      //   localityId
      //   address
      // }
      dispatch(actions.fetchSearchData(data));
    });

  return (
    <div className="container-md mt-1">
      <div className="card bg-warning">
        <div className="card-body bg-light m-1">
          <h2>
            {notaryId
              ? "Внесення змін про нотаріус до рєстру"
              : "Внесення нового нотаріусу до рєстру"}
          </h2>
          <form>
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
                      ref={lastName}
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
                      ref={firtName}
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
                      ref={middleName}
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
                      ref={licenceNumber}
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
                      {...register("region", { required: true })}
                      ref={region}
                    >
                      <option selected>Регіон</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
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
                      {...register("area", { required: true })}
                      ref={area}
                    >
                      <option selected>Район</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
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
                      {...register("settlement", { required: true })}
                      ref={settlement}
                    >
                      <option selected>Населений пункт</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
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
                      ref={address}
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
                    {...register("possition", { required: true })}
                    ref={position}
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
                    {...register("name", { required: true })}
                    ref={name}
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
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Робочий телефон
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Робочий телефон"
                    ref={phoneNumber}
                  />
                </div>
                <button type="button" className="btn btn-info w-100">
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
