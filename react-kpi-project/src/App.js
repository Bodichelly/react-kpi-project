import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Loggin from "./Components/Loggin/Loggin";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";
import SearchPage from "./Components/SearchPage/SearchPageTemplate/SearchPage";
import PrivateNotaryPage from "./Components/NotaryPage/PrivateNotaryPage"
import StateNotaryDepartment from "./Components/NotaryPage/StateNotaryDepartmentPage"
import CreateUserPage from './Components/CreateUserPage/CreateUserPage';
import GovernmentNotaryMessage from './Components/RegistratorMessages/GovernmentNotary/GovernmentNotaryMessage';
import PrivateNotaryMessage from './Components/RegistratorMessages/PrivateNotary/PrivateNotary';

function App() {
  const isLoading = useSelector((state) => state.app.isLoading);

  return (
    <div className="App">
      {isLoading ? <Loader></Loader> : null}
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/loggin">
            <Loggin />
          </Route>
          <Route path="/register">
            <CreateUserPage />
          </Route>
          <Route path="/private-notary-page/:notaryId">
            <PrivateNotaryPage />
          </Route>
          <Route path="/state-notary-department-page/:notaryId">
            <StateNotaryDepartment />
          </Route>
          <Route path="/new-private-notary-page">
            <PrivateNotaryPage />
          </Route>
          <Route path="/new-state-notary-department-page">
            <StateNotaryDepartment />
          </Route>
          <Route path="/help">
            <div className="container-md mt-1">
              <div className="card bg-warning">
                <div className="card-body bg-light m-1">
                  <h2>Допомога</h2>
                  <div>
                    Для перегляду сайту рекомендується використовувати
                    веб-браузери: Mozilla Firefox, Google
                    Chrome, Opera
                    <br />
                    <br />
                    <br />
                    У випадку виникнення проблем під час роботи з сайтом просимо
                    зателефонувати:
                    <br />
                    <br />- <b>черговому інженеру</b> за телефоном:{" "}
                    <b>0-666-666-666</b>
                    <br />- <b>адміністратору</b> за телефонами:{" "}
                    <b>(+38 666) 666-66-66</b>, <b>(+38 666) 666-66-66</b>
                    <br />
                    <br />
                    <a
                      href="https://ern.minjust.gov.ua/docs/ern_search_rules.pdf"
                      style={{textDecoration: "underlined"}}
                      disabled=""
                    >
                      Правила пошуку інформації на сайті
                    </a>
                    <br />
                    <br />
                    
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/government-notary-message/:notaryId?">
            <GovernmentNotaryMessage />
          </Route>
          <Route path="/private-notary-message/:notaryId?">
            <PrivateNotaryMessage />
          </Route>
          <Route path="/">
            <div className="container-md mt-1">
              <div className="card bg-warning">
                <div className="card-body bg-light m-1">
                  <h2>Головна</h2>
                  <hr class="dropdown-divider mb-3 mt-3" />
                  <Link to="/search">Пошук державних нотаріальних контор</Link>
                  <hr class="dropdown-divider mb-3 mt-3" />
                  <Link to="/search">Пошук нотаріусів</Link>
                  <hr class="dropdown-divider mb-3 mt-3" />
                  <Link to="/search">Пошук за адресою</Link>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
