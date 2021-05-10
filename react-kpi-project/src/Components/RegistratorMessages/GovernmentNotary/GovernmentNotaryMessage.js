const GovernmentNotaryMessage = (props) => {
  //

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="card bg-warning">
        <div className="card-body bg-light m-1">
          <form>
            <h4 className="card-title text-center">
              Повідомлення для внесення відомостей про нотаріусів, які працюють
              у державних нотаріальних конторах або архівах, до Єдиного реєстру
              нотаріусів
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
                <div className="mb-3">
                  <label htmlFor="lastName" class="form-label mr-2">
                    Прізвище
                  </label>
                  <input class="form-control" id="lastName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="firstName" class="form-label mr-2">
                    Ім'я
                  </label>
                  <input class="form-control" id="firstName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="middleName" class="form-label mr-2">
                    По батькові
                  </label>
                  <input class="form-control" id="middleName" />
                </div>
              </div>
              <div className="col col-12 col-md-6">
                <p className="card-text">
                  Підстава внесення до Єдиного реєстру нотаріусів
                </p>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="newPosition"
                    value="newPosition"
                    name="reason"
                  />
                  <label htmlFor="newPosition" className="form-check-label">
                    Призначення на посаду
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="fired"
                    value="fired"
                    name="reason"
                  />
                  <label htmlFor="fired" className="form-check-label">
                    Звільнення з роботи
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="nameChange"
                    value="nameChange"
                    name="reason"
                  />
                  <label htmlFor="nameChange" className="form-check-label">
                    Зміна імені нотаріуса
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="positionChangeInOneOrg"
                    value="positionChangeInOneOrg"
                    name="reason"
                  />
                  <label
                    htmlFor="positionChangeInOneOrg"
                    className="form-check-label"
                  >
                    Переведення на іншу посаду в межах державної нотаріальної
                    контори
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="positionChangeToAnotherOrg"
                    value="positionChangeToAnotherOrg"
                    name="reason"
                  />
                  <label
                    htmlFor="positionChangeToAnotherOrg"
                    className="form-check-label"
                  >
                    Переведення на іншу посаду в межах області (міста), до іншої
                    нотаріальної контори
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                className="form-label mr-2 mb-0 align-self-center"
                htmlFor="date"
              >
                Дата призначення на посаду, переведення або звільнення з посади
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-input"
              ></input>
            </div>
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
              <label htmlFor="issuer" className="form-label mr-2 align-self-center">
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
                htmlFor="certificateNumber"
                className="form-label mr-2 align-self-center"
              >
                Номер свідоцтва про право на зайняття нотаріальною діяльністю
              </label>
              <input
                name="certificateNumber"
                id="certificateNumber"
                className="form-input mr-2"
              ></input>
            </div>
            <div className="form-group">
              <label
                htmlFor="certificateDate"
                className="form-label mr-2 align-self-center"
              >
                Дата видачі свідоцтва про право на зайняття нотаріальною
                діяльністю
              </label>
              <input
                type="date"
                name="certificateDate"
                id="certificateDate"
                className="form-input mr-2"
              ></input>
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="orgName" className="form-label mr-2 align-self-center">
                Назва державної нотаріальної контори / архіву
              </label>
              <input
                list="orgName"
                name="orgName"
                className="form-input"
              ></input>
              {/* todo: get all orgs names */}
              <datalist id="orgName">
                <option value="Org1" />
                <option value="Org2" />
                <option value="Org3" />
                <option value="Org4" />
                <option value="Org5" />
              </datalist>
            </div>
            <div className="form-group row">
              <div className="col-2 col-md-2">
                <p className="form-label mr-2 mb-3">Посада</p>
                <p className="form-label mr-2">Робочий телефон</p>
              </div>
              <div className="col-4 col-md-4">
                <div className="d-flex flex-column">
                  <input
                    name="position"
                    id="position"
                    className="form-input mr-2 mb-2"
                  ></input>
                  <input
                    name="workPhoneNumber"
                    id="workPhoneNumber"
                    className="form-input mr-2"
                  ></input>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-check">
                  <input
                    type="radio"
                    name="orgType"
                    id="organization"
                    value="organization"
                    className="form-check-input"
                  ></input>
                  <label htmlFor="organization" className="form-check-label">
                    Державна нотаріальна контора
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    name="orgType"
                    id="archive"
                    value="archive"
                    className="form-check-input"
                  ></input>
                  <label htmlFor="archive" className="form-check-label">
                    Державний нотаріальний архів
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="form-group">
              <p className="form-label mr-2">
                Відомості про зміну імені нотаріуса (у випадку внесення змін
                заповнюються відповідні поля)
              </p>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="mb-3">
                    <label htmlFor="updatedLastName" class="form-label mr-2">
                      Прізвище
                    </label>
                    <input class="form-control" id="updatedLastName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="updatedFirstName" class="form-label mr-2">
                      Ім'я
                    </label>
                    <input class="form-control" id="updatedFirstName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="updatedMiddleName" class="form-label mr-2">
                      По батькові
                    </label>
                    <input class="form-control" id="updatedMiddleName" />
                  </div>
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
                    <textarea class="form-control" id="additionalStatements" rows="6"/>
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

export default GovernmentNotaryMessage;
