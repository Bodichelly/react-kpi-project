import { useForm } from "react-hook-form";

const PrivateNotaryMessage = (props) => {
  const { handleSubmit, register } = useForm();

  const handler = (data) => {
    // BIGBEN DAROVA, DELAY TUTb
    console.log(data);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="card bg-warning">
        <div className="card-body bg-light m-1">
          <form onSubmit={handleSubmit(handler)}>
            <h4 className="card-title text-center">
              Повідомлення для внесення відомостей про нотаріусів, які
              займаються приватною нотаріальною діяльністю, до Єдиного реєстру
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
                    {...register("region", { required: true })}
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
                  <input
                    class="form-control"
                    id="lastName"
                    {...register("lastName", { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="firstName" class="form-label mr-2">
                    Ім'я
                  </label>
                  <input
                    class="form-control"
                    id="firstName"
                    {...register("firstName", { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="middleName" class="form-label mr-2">
                    По батькові
                  </label>
                  <input
                    class="form-control"
                    id="middleName"
                    {...register("middleName", { required: true })}
                  />
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
                    id="notaryActivityRegistration"
                    value="notaryActivityRegistration"
                    name="reason"
                  />
                  <label
                    htmlFor="notaryActivityRegistration"
                    className="form-check-label"
                  >
                    Реєстрація нотаріальної діяльності
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="notaryActivityPause"
                    value="notaryActivityPause"
                    name="reason"
                  />
                  <label
                    htmlFor="notaryActivityPause"
                    className="form-check-label"
                  >
                    Зупинення нотаріальної діяльності
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="notaryActivityRenovation"
                    value="notaryActivityRenovation"
                    name="reason"
                  />
                  <label
                    htmlFor="notaryActivityRenovation"
                    className="form-check-label"
                  >
                    Поновлення нотаріальної діяльності
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
                    id="notaryAreaChange"
                    value="notaryAreaChange"
                    name="reason"
                  />
                  <label
                    htmlFor="notaryAreaChange"
                    className="form-check-label"
                  >
                    Зміна нотаріального округу в межах області
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="notaryActivityStop"
                    value="notaryActivityStop"
                    name="reason"
                  />
                  <label
                    htmlFor="notaryActivityStop"
                    className="form-check-label"
                  >
                    Припинення нотаріальної діяльності
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="addressOrPhoneNumberChange"
                    value="addressOrPhoneNumberChange"
                    name="reason"
                  />
                  <label
                    htmlFor="addressOrPhoneNumberChange"
                    className="form-check-label"
                  >
                    Зміна адреси розташування робочого місця або робочого
                    телефону
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                className="form-label mr-2 mb-0 align-self-center"
                htmlFor="date"
              >
                Дата реєстрації/зупинення/поновлення/припинення нотаріальної
                діяльності або зміна нотаріального округу
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
                Номер свідоцтва про право на зайняття нотаріальною діяльністю
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
                Дата видачі свідоцтва про право на зайняття нотаріальною
                діяльністю
              </label>
              <input
                type="date"
                name="documentDate"
                id="documentDate"
                className="form-input"
              ></input>
            </div>

            <div className="d-flex">
              <div className="form-group">
                <label
                  htmlFor="registrationCertificationNumber"
                  className="form-label mr-2 align-self-center"
                >
                  Номер реєстраційного посвідчення
                </label>
                <input
                  name="registrationCertificationNumber"
                  id="registrationCertificationNumber"
                  className="form-input mr-2"
                ></input>
              </div>

              <div className="form-group">
                <label
                  htmlFor="registrationCertificationDate"
                  className="form-label mr-2 align-self-center"
                >
                  Дата реєстрації
                </label>
                <input
                  type="date"
                  name="registrationCertificationDate"
                  id="registrationCertificationDate"
                  className="form-input mr-2"
                ></input>
              </div>
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
              <p className="form-label">
                Відомості про робоче місце нотаріуса (у випадку внесення змін
                заповнюються відповідні поля)
              </p>
            </div>
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
                    <input
                      class="form-control"
                      id="updatedLastName"
                      name="updatedLastName"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="updatedFirstName" class="form-label mr-2">
                      Ім'я
                    </label>
                    <input
                      class="form-control"
                      id="updatedFirstName"
                      name="updatedFirstName"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="updatedMiddleName" class="form-label mr-2">
                      По батькові
                    </label>
                    <input
                      class="form-control"
                      id="updatedMiddleName"
                      name="updatedMiddleName"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="form-group">
              <p className="form-label">
                Відомості про документ, на підставі якого нотаріальна діяльність
                зупиняється, поновлюється або припиняється
              </p>
              <label htmlFor="reasonDocumentName" class="form-label mr-2">
                Назва документа
              </label>
              <input
                class="form-control"
                id="reasonDocumentName"
                name="reasonDocumentName"
              />

              <label
                className="form-label mr-2 mb-0 align-self-center"
                htmlFor="reasonDate"
              >
                Дата призначення на посаду, переведення або звільнення з посади
              </label>
              <input
                type="date"
                name="reasonDate"
                id="reasonDate"
                className="form-input"
              ></input>
              <div className="my-2 row-cols-2">
                <label htmlFor="reasonDocumentNumber" class="form-label mr-2">
                  Номер документа
                </label>
                <input
                  class="form-control"
                  id="reasonDocumentNumber"
                  name="reasonDocumentNumber"
                />
                <label
                  className="form-label mr-2 mb-0 align-self-center"
                  htmlFor="reasonDocumentDate"
                >
                  Дата документа
                </label>
                <input
                  type="date"
                  name="reasonDocumentDate"
                  id="reasonDocumentDate"
                  className="form-input"
                ></input>
              </div>

              <label htmlFor="reasonDocumentIssuer" class="form-label mr-2">
                Видавець
              </label>
              <input
                class="form-control"
                id="reasonDocumentIssuer"
                name="reasonDocumentIssuer"
              />
              <div className="my-2">
                <label
                  className="form-label mr-2 mb-0 align-self-center"
                  htmlFor="notaryActivityStopDate"
                >
                  Дата зупинення, припинення або поновлення нотаріальної
                  діяльності
                </label>
                <input
                  type="date"
                  name="notaryActivityStopDate"
                  id="notaryActivityStopDate"
                  className="form-input"
                ></input>
              </div>
              <label
                htmlFor="notaryActivityTerminationPeriod"
                class="form-label mr-2"
              >
                Термін зупинення нотаріальної діяльності
              </label>
              <input
                class="form-control"
                id="notaryActivityTerminationPeriod"
                name="notaryActivityTerminationPeriod"
              />
            </div>
            <hr />
            <div className="form-group">
              <p className="form-label">
                Відомості про державний нотаріальний архів, до якого передано
                (буде передано) документи нотаріального діловодства, та архів
                нотаріуса (зазначається у випадку припинення приватної
                нотаріальної діяльності)
              </p>
              <div className="d-flex">
                <label htmlFor="archiveName" class="form-label mr-2">
                  Назва архіву
                </label>
                <input
                  class="form-control"
                  id="archiveName"
                  name="archiveName"
                />
              </div>

              <div className="d-flex">
                <label htmlFor="notaryArea" class="form-label mr-2">
                  Нотаріальний округ
                </label>
                <input class="form-control" id="notaryArea" name="notaryArea" />
              </div>

              <div className="my-2">
                <p className="form-group">Місцезнаходження архіву</p>
                <div className="form-group">
                  <p className="form-label">
                    Відомості про робоче місце нотаріуса (у випадку внесення
                    змін заповнюються відповідні поля)
                  </p>
                </div>
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
                        name="notaryArchiveIndex"
                        id="notaryArchiveIndex"
                        className="form-input mr-2 mb-1"
                      ></input>
                      <input
                        name="notaryArchiveRegion"
                        id="notaryArchiveRegion"
                        className="form-input mr-2 mb-1"
                      ></input>
                      <input
                        name="notaryArchiveArea"
                        id="notaryArchiveArea"
                        className="form-input mr-2 mb-1"
                      ></input>
                      <input
                        name="notaryArchiveLocality"
                        id="notaryArchiveLocality"
                        className="form-input mr-2 mb-1"
                      ></input>
                      <input
                        name="notaryArchiveStreet"
                        id="notaryArchiveStreet"
                        className="form-input mr-2"
                      ></input>
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <input
                      name="notaryArchiveHouseNumber"
                      id="notaryArchiveHouseNumber"
                      className="form-input mr-2"
                      placeholder="буд."
                    ></input>
                    <input
                      name="notaryArchiveSectionNumber"
                      id="notaryArchiveSectionNumber"
                      className="form-input mr-2"
                      placeholder="корп."
                    ></input>
                    <input
                      name="notaryArchiveFlatNumber"
                      id="notaryArchiveFlatNumber"
                      className="form-input mr-2"
                      placeholder="кв."
                    ></input>
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

export default PrivateNotaryMessage;
