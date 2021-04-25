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
          <Route path="/private-notary-page/:notaryId">
            <PrivateNotaryPage/>
          </Route>
          <Route path="/state-notary-department-page/:notaryId">
            <StateNotaryDepartment/>
          </Route>
          <Route path="/">
            {/* <Home /> */}
            <h2>HOME</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
