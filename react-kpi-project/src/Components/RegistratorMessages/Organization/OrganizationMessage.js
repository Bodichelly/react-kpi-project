const OrganizationMessage = (props) => {
  //

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="card bg-warning">
        <div className="card-body bg-light m-1">
          <form>
            <h4 className="card-title text-center">
              Повідомлення для внесення відомостей про державні нотаріальні
              контори та архіви до Єдиного реєстру нотаріусів
            </h4>
            <hr />
            <div className="row">
              <div className="col col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="region" className="form-label mr-2">
                    Регіон
                  </label>

                  <select
                    className="form-select"
                    id="region"
                    // todo
                    // {...register("region", { required: true })}
                    // ref={region}
                  >
                    <option selected>Регіон</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="department"
                    value="department"
                    name="orgType"
                  />
                  <label htmlFor="department" className="form-check-label">
                    Державна нотаріальна контора
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="archive"
                    value="archive"
                    name="orgType"
                  />
                  <label htmlFor="archive" className="form-check-label">
                    Державний нотаріальний архів
                  </label>
                </div>
              </div>
              <div className="col col-12 col-md-6">
                <p className="card-text">
                  Підстава внесення відомостей до Реєстру
                </p>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="orgRegistration"
                    value="orgRegistration"
                    name="reason"
                  />
                  <label htmlFor="orgRegistration" className="form-check-label">
                    Реєстрація контори чи архіву
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="orgLiquidation"
                    value="orgLiquidation"
                    name="reason"
                  />
                  <label htmlFor="orgLiquidation" className="form-check-label">
                    Ліквідація контори чи архіву
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="locationOrNumberChange"
                    value="locationOrNumberChange"
                    name="reason"
                  />
                  <label
                    htmlFor="locationOrNumberChange"
                    className="form-check-label"
                  >
                    Зміна місцезнаходження або телефону
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="notaryAreaChange"
                    value="notaryAreaChange"
                    name="reason"
                  />
                  <label
                    htmlFor="notaryAreaChange"
                    className="form-check-label"
                  >
                    Зміна нотаріального округу
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                className="form-label mr-2 mb-0 align-self-center"
                htmlFor="notaryAreaChangeDate"
              >
                Дата реєстрації/ліквідації/зміни нотаріального округу
              </label>
              <input
                type="date"
                name="notaryAreaChangeDate"
                id="notaryAreaChangeDate"
                className="form-input"
              ></input>
            </div>
            <div className="form-group">
              <label
                htmlFor="documentNumber"
                className="form-label mr-2 align-self-center"
              >
                Назва документа, на підставі якого вносяться зміни до Реєстру
              </label>
              <input
                name="documentNumber"
                id="documentNumber"
                className="form-input mr-2"
              ></input>

              <div className="form-group">
                <label
                  htmlFor="documentNumber"
                  className="form-label mr-2 align-self-center"
                >
                  Номер документа
                </label>
                <input
                  name="documentNumber"
                  id="documentNumber"
                  className="form-input mr-2"
                ></input>
              </div>

              <label
                htmlFor="documentDate"
                className="form-label mr-2 align-self-center"
              >
                Дата документа
              </label>
              <input
                type="date"
                name="documentDate"
                id="documentDate"
                className="form-input"
              ></input>
            </div>

            <div className="form-group">
              <label
                htmlFor="issuer"
                className="form-label mr-2 align-self-center"
              >
                Видавець
              </label>
              <input
                name="issuer"
                id="issuer"
                className="form-input mr-2"
              ></input>
            </div>
            <div className="form-group">
              <label
                htmlFor="orgName"
                className="form-label mr-2 align-self-center"
              >
                Назва контори або архіву
              </label>
              <input
                name="orgName"
                id="orgName"
                className="form-input mr-2"
              ></input>
            </div>

            <div className="form-group">
              <label
                htmlFor="notaryArea"
                className="form-label mr-2 align-self-center"
              >
                Нотаріальний округ
              </label>
              <input
                name="notaryArea"
                id="notaryArea"
                className="form-input mr-2"
              ></input>
            </div>
            <hr />
            <div className="form-group">
              <p className="form-label mr-2">
                Відомості про зміну імені нотаріуса (у випадку внесення змін
                заповнюються відповідні поля)
              </p>
              <div className="form-group row">
                <div className="col-2 col-md-2">
                  <p className="form-label mr-2">Індекс</p>
                  <p className="form-label mr-2 mb-3">Область</p>
                  <p className="form-label mr-2">Район</p>
                  <p className="form-label mr-2">Населений пункт</p>
                  <p className="form-label mr-2">Вулиця, провулок, площа</p>
                </div>
                <div className="col-4 col-md-4">
                  <div className="d-flex flex-column">
                    <input
                      name="index"
                      id="index"
                      className="form-input mr-2 mb-1"
                    ></input>
                    <input
                      name="region"
                      id="region"
                      className="form-input mr-2 mb-1"
                    ></input>
                    <input
                      name="area"
                      id="area"
                      className="form-input mr-2 mb-1"
                    ></input>
                    <input
                      name="locality"
                      id="locality"
                      className="form-input mr-2 mb-1"
                    ></input>
                    <input
                      name="street"
                      id="street"
                      className="form-input mr-2"
                    ></input>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <input
                    name="houseNumber"
                    id="houseNumber"
                    className="form-input mr-2"
                    placeholder="буд."
                  ></input>
                  <input
                    name="sectionNumber"
                    id="sectionNumber"
                    className="form-input mr-2"
                    placeholder="корп."
                  ></input>
                  <input
                    name="flatNumber"
                    id="flatNumber"
                    className="form-input mr-2"
                    placeholder="кв."
                  ></input>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="phoneNumber"
                    className="form-label mr-2 align-self-center"
                  >
                    Робочий телефон
                  </label>
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    className="form-input mr-2"
                  ></input>
                </div>
              </div>
            </div>
            <hr />
            <div className="form-group">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="additionalStatements"
                      class="form-label mr-2"
                    >
                      Додаткові відомості
                    </label>
                    <textarea
                      class="form-control"
                      id="additionalStatements"
                      rows="6"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="responsiblePersonFullname"
                      class="form-label mr-2"
                    >
                      ПІБ відповідальної особи
                    </label>
                    <input
                      class="form-control"
                      id="responsiblePersonFullname"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="responsiblePersonPosition"
                      class="form-label mr-2"
                    >
                      Посада відповідальної особи
                    </label>
                    <input
                      class="form-control"
                      id="responsiblePersonPosition"
                    />
                    <div className="d-flex justify-content-end mt-3">
                      <button className="btn btn-primary">
                        Відправити повідомлення
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrganizationMessage;
