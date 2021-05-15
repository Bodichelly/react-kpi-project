import React from "react";

const CreateUserPage = (props) => {
  // some logic

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card bg-warning">
        <div className="card-body bg-light m-1">
          <form>
            <h5 className="card-title">Створення користувача</h5>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="lastName" class="form-label">
                    Прізвище
                  </label>
                  <input class="form-control" id="lastName" />
                </div>

                <div className="mb-3">
                  <label htmlFor="firstName" class="form-label">
                    Ім'я
                  </label>
                  <input class="form-control" id="firstName" />
                </div>

                <div className="mb-3">
                  <label htmlFor="middleName" class="form-label">
                    По батькові
                  </label>
                  <input class="form-control" id="middleName" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" class="form-label">
                    Елктронна пошта
                  </label>
                  <input type="email" class="form-control" id="email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" class="form-label">
                    Пароль
                  </label>
                  <input type="password" class="form-control" id="password" />
                </div>

                <div className="mb-3">
                  <label htmlFor="repeatPassword" class="form-label">
                    Повторіть пароль
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="repeatPassword"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="birthDate" class="form-label">
                    Дата народження
                  </label>
                  <input class="form-control" id="birthDate" type="date" />
                </div>

                <div className="mb-3">
                  <label htmlFor="passportSeries" class="form-label">
                    Серія паспорту
                  </label>
                  <input
                    class="form-control"
                    id="passportSeries"
                    maxlength="2"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="passportNumber" class="form-label">
                    Номер паспорту
                  </label>
                  <input
                    class="form-control"
                    id="passportNumber"
                    pattern="\d{9}"
                    maxlength="9"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="ITN" class="form-label">
                    ІПН
                  </label>
                  <input
                    class="form-control"
                    id="ITN"
                    pattern="\d{10}"
                    maxlength="10"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3 mb-0">
              <button type="submit" className="btn btn-success btn-block">
                Підтвердити
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUserPage;
