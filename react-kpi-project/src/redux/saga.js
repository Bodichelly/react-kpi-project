import {
  takeEvery,
  put,
  call,
  select,
  all,
  takeLatest,
} from "redux-saga/effects";
import axios from "axios";
import {
  UPDATE_SEARCH_DATA,
  FETCH_SEARCH_DATA,
  FETCH_REGION,
  SEARCH_BY_ADDRESS,
  SEARCH_BY_NAME,
  SEARCH_BY_NOTARY,
  FETCH_AREA,
  FETCH_SETTLEMENT,
  UPDATE_MESSAGE_LIST,
  CREATE_NEW_MESSAGE,
  SEARCH_USERS,
  ADD_USER,
  REMOVE_USER,
  LOGIN_USER,
  ADD_NEW_NOTARY,
  ADD_NEW_DEPARTMENT,
  UPDATE_NOTARY,
  UPDATE_DEPARTMENT,
  DELETE_NOTARY,
  DELETE_DEPARTMENT,
  LOGOUT_USER
} from "./types";
import actions from "src/redux/actions";

const delay = (time) =>
  new Promise((resolve) => setTimeout(resolve, time * 1000));

export function* sagaWatcher() {
  yield takeLatest(FETCH_SEARCH_DATA, fetchSearchData);
  yield takeLatest(FETCH_REGION, fetchRegion);
  yield takeLatest(FETCH_AREA, fetchArea);
  yield takeLatest(FETCH_SETTLEMENT, fetchSettlement);

  //messages
  yield takeLatest(UPDATE_MESSAGE_LIST, updateMessageList);
  yield takeLatest(CREATE_NEW_MESSAGE, createNewMessage);

  //users
  yield takeLatest(ADD_USER, addUser);
  yield takeLatest(REMOVE_USER, removeUser);

  //auth
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(LOGOUT_USER, logoutUser);

  //notaries
  yield takeLatest(ADD_NEW_NOTARY, addNewNotary);
  yield takeLatest(ADD_NEW_DEPARTMENT, addNewDepartment);
  yield takeLatest(UPDATE_NOTARY, updateNotary);
  yield takeLatest(UPDATE_DEPARTMENT, updateDepartment);
  yield takeLatest(DELETE_NOTARY, deleteNotary);
  yield takeLatest(DELETE_DEPARTMENT, deleteDepartment);

}
//takeevery takeLatest takeLeading

function* addNewNotary(action) {
try {
    const notaryData = action.payload;
    yield put(actions.showLoader());
    yield call(addNewNotaryRequest, notaryData);
    yield put(actions.hideLoader());
  } catch (e) { }
}
async function addNewNotaryRequest(notaryData) {
  console.log('notaryData:', notaryData)
  // await fetch("http://localhost:3000/api/notaries");
}

function* addNewDepartment(action) {
  try {
    const departmentData = action.payload;
    yield put(actions.showLoader());
    yield call(addNewDepartmentRequest, departmentData);
    yield put(actions.hideLoader());
  } catch (e) { }
}
async function addNewDepartmentRequest(departmentData) {
  // make request
  //await fetch("http://localhost:3000/api/regions");
}

function* updateNotary(action) {
  try {
    const notaryData = action.payload;
    yield put(actions.showLoader());
    yield call(updateNotaryRequest, notaryData);
    yield put(actions.hideLoader());
  } catch (e) { }
}
async function updateNotaryRequest(notaryData) {
  // make request
  //await fetch("http://localhost:3000/api/regions");
}

function* updateDepartment(action) {
  try {
    const departmentData = action.payload;
    yield put(actions.showLoader());
    yield call(updateDepartmentRequest, departmentData);
    yield put(actions.hideLoader());
  } catch (e) { }
}
async function updateDepartmentRequest(departmentData) {
  // make request
  //await fetch("http://localhost:3000/api/regions");
}

function* deleteNotary(action) {
  try {
    const notaryId = action.payload;
    const searchQueryData = yield select((state) => state.search.searchQueryData);
    yield put(actions.showLoader());
    yield call(deleteNotaryRequest, notaryId);
    yield put(actions.fetchSearchData(searchQueryData));
    yield put(actions.hideLoader());
  } catch (e) { }
}
async function deleteNotaryRequest(notaryId) {
  // make request
  //await fetch("http://localhost:3000/api/regions");
}

function* deleteDepartment(action) {
  try {
    const departmentId = action.payload;
    const searchQueryData = yield select((state) => state.search.searchQueryData);
    yield put(actions.showLoader());
    yield call(deleteDepartmentRequest, departmentId);
    yield put(actions.fetchSearchData(searchQueryData));
    yield put(actions.hideLoader());
  } catch (e) { }
}
async function deleteDepartmentRequest(userData) {
  // make request
  //await fetch("http://localhost:3000/api/regions");
}



function* loginUser(action) {
  try {
    const credentials = action.payload;
    yield put(actions.showLoader());
    const { data: { user }} = yield call(loginUserRequest, credentials);
    yield put(actions.setUserData(user));
    yield put(actions.hideLoader());
    localStorage.setItem('currentUser', yield select(state => state.app.currentUser))
  } catch (e) { }
}

async function loginUserRequest(userData) {
  return axios.post('http://localhost:3000/api/auth/login', userData);
}

function* logoutUser(action) {
  localStorage.setItem('currentUser', '');
}

function* addUser(action) {
  try {
    const userData = action.payload;
    yield put(actions.showLoader());
    yield call(addUserRequest, userData);
    yield put(actions.hideLoader());
  } catch (e) { }
}

async function addUserRequest(userData) {
  await axios.post("http://localhost:3000/api/auth/register", userData);
}

function* removeUser(action) {
  try {
    const userId = action.payload;
    const searchQueryData = yield select((state) => state.search.searchQueryData);
    yield put(actions.showLoader());
    yield call(removeUserRequest, userId);
    yield put(actions.fetchSearchData(searchQueryData));
    yield put(actions.hideLoader());
  } catch (e) { }
}

async function removeUserRequest(userData) {
  // make request
  //await fetch("http://localhost:3000/api/regions");
}

function* createNewMessage(action) {
  try {
    const messages = JSON.parse(localStorage.getItem('messages'));
    messages.push(action.payload);
    localStorage.setItem('messages', JSON.stringify(messages))
    yield put(actions.updateMessageList());
  } catch (e) { }
}

function* updateMessageList(action) {
  try {
    const messages = JSON.parse(localStorage.getItem('messages'));
    yield put(actions.setMessageListData(messages));
  } catch (e) { }
}

function* fetchRegion(action) {
  try {
    const searchType = yield select((state) => state.search.searchType);
    if (searchType !== SEARCH_BY_ADDRESS) {
      return;
    }
    yield put(actions.showLoader());
    yield call(delay, 1);
    const regions = yield call(getRegions);
    yield put(actions.setRegion(regions));
    yield put(actions.hideLoader());
  } catch (e) { }
}

function* fetchArea(action) {
  try {
    const searchType = yield select((state) => state.search.searchType);
    if (searchType !== SEARCH_BY_ADDRESS) {
      return;
    }
    yield put(actions.showLoader());
    //yield call(delay, 1);
    const region = action.payload;
    const areas = yield call(getAreasByRegionId, region);
    yield put(actions.setArea(areas));
    yield put(actions.hideLoader());
  } catch (e) { }
}

function* fetchSettlement(action) {
  try {
    const searchType = yield select((state) => state.search.searchType);
    if (searchType !== SEARCH_BY_ADDRESS) {
      return;
    }
    yield put(actions.showLoader());
    //yield call(delay, 1);
    const area = action.payload;
    const settlements = yield call(getLocalitiesByAreaId, area.id);
    yield put(actions.setSettlement(settlements));
    yield put(actions.hideLoader());
  } catch (e) { }
}

function* fetchSearchData(action) {
  try {
    //
    return;
    //
    const searchType = yield select((state) => state.search.searchType);
    const data = action ? action.payload : {};
    yield put(actions.setSearchQueryData(data));
    let searchData = [];
    yield put(actions.showLoader());
    if (searchType === SEARCH_BY_ADDRESS) {
      searchData = yield call(() => { }, data);
    } else if (searchType === SEARCH_BY_NAME) {
      searchData = yield call(() => { }, data);
    } else if (searchType === SEARCH_BY_NOTARY) {
      searchData = yield call(() => { }, data);
    } else if (searchType === SEARCH_USERS) {
      searchData = yield call(() => { }, data);
    }
    yield put(actions.updateSearchData(searchData));
    yield put(actions.hideLoader());
  }
  catch (e) { }
}

// function* selectUserWorker() {
//   try {
//     yield put({type: REQUEST_POSTS})
//   } catch (e) {
//     yield all([
//       put(showLoader(POSTS)),
//       put(showErrorMessage("Failed user selection"))
//     ])
//     // yield put(showLoader(POSTS))
//     // yield put(showErrorMessage("Failed user selection"))
//     yield call(delay, 5);
//     yield put(hideErrorMessage())
//   }
// }

// function* fetchPostsWorker() {
//   try {
//     yield put(showLoader(POSTS))
//     const id = yield select(state=>state.users.selectedUserId)
//     const payload = yield call(fetchPosts, id)
//     yield put({ type: FETCH_POSTS, payload })
//     yield put(hideLoader(POSTS))
//   } catch (e) {
//     yield put(showLoader(POSTS))
//     yield put(showErrorMessage("Failed posts fetching"))
//     yield call(delay, 5);
//     yield put(hideErrorMessage())
//   }
// }

// function* fetchUsersWorker() {
//   try {
//     yield put(showLoader(USERS))
//     const payload = yield call(fetchUsers)
//     yield put({ type: FETCH_USERS, payload })
//     yield put(hideLoader(USERS))
//   } catch (e) {
//     yield put(showLoader(USERS))
//     yield put(showErrorMessage("Failed users fetching"))
//     yield call(delay, 5);
//     yield put(hideErrorMessage())
//   }
// }

// async function fetchPosts(id) {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
//   return await response.json()
// }

// async function fetchUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
//   return await response.json()
// }

async function getRegions() {
  return [
    {
      "id": 1,
      "name": "Вінницька обл",
      "createdAt": "2021-04-25T16:31:30.567Z",
      "updatedAt": "2021-04-25T16:31:30.567Z"
    },
    {
      "id": 2,
      "name": "Житомирська обл",
      "createdAt": "2021-04-25T16:31:30.567Z",
      "updatedAt": "2021-04-25T16:31:30.567Z"
    }]
  // const response = await fetch("http://localhost:3000/api/regions");
  // return response.json();
}

async function getAreasByRegionId(id) {
  if (id == 1) {
    return [
      {
        "id": 1,
        "name": "for region 1 #1",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 2,
        "name": "for region 1 #2",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
    ]
  } else {
    return [
      {
        "id": 3,
        "name": "for region 2 #3",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 4,
        "name": "for region 2 #4",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
    ]
  }
  // const response = await fetch(`http://localhost:3000/api/areas?id=${id}`);
  // return response.json();
}

async function getLocalitiesByAreaId(id) {
  if (id == 1) {
    return [
      {
        "id": 1,
        "name": "for area 1 #1",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 2,
        "name": "for area 1 #2",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
    ]
  } else if (id == 2) {
    return [
      {
        "id": 3,
        "name": "for area 1 #3",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 4,
        "name": "for area 1 #4",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
    ]
  } else if (id == 3) {
    return [
      {
        "id": 5,
        "name": "for area 1 #5",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 6,
        "name": "for area 1 #6",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
    ]
  } else {
    return [
      {
        "id": 7,
        "name": "for area 1 #7",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
      {
        "id": 8,
        "name": "for area 1 #8",
        "createdAt": "2021-04-25T16:31:30.567Z",
        "updatedAt": "2021-04-25T16:31:30.567Z"
      },
    ]
  }
  // const response = await fetch(`http://localhost:3000/api/localities?id=${id}`);
  // return response.json();
}

function getNotaries() {
  return JSON.parse(localStorage.getItem("notaries"));
}

function addNotaries(notaries) {
  localStorage.setItem("notaries", JSON.stringify(notaries));
}

const notaries = [
  // {
  //   firstName: "Барська",
  //   lastName: "державна нотаріальна",
  //   middleName: "контора",
  //   phoneNumbers: "(04341) 2-10-11",
  //   certificateNumber: "Барський р., м. Бар, вул. Героїв Майдану, 6"
  // }
  //   {
  //   firstName: "Володимир ",
  //   lastName: "Мельник",
  //   middleName: "Олексійович",
  //   certificateNumber: "3163",
  //   isPrivate: true,
  //   phoneNumbers: "+380592949243",
  //   regionId: 1,
  //   areaId: 1,
  //   localityId: 1, 
  //   address: "вул. Робоча, 20",
  //   id: "4354654624135646"
  // },
  // {
  //   firstName: "Людмила",
  //   lastName: "Ковальчук",
  //   middleName: "Вікторівна ",
  //   certificateNumber: "7604",
  //   isPrivate: true,
  //   phoneNumbers: "+380592949243",
  //   regionId: 1,
  //   areaId: 2,
  //   localityId: 1, 
  //   address: "ул. Незалежності, 36",
  //   id: "3211827661462414"
  // },
  {
    firstName: "Антон",
    lastName: "Воробйов",
    middleName: "Олексійович",
    certificateNumber: "170",
    isPrivate: true,
    phoneNumbers: "+380592949243",
    regionId: 2,
    areaId: 1,
    localityId: 1,
    address: "вул. Центральна, 15",
    id: "143183517351375137"
  },
  {
    firstName: "Анатолій",
    lastName: "Воробйов",
    middleName: "Олексійович",
    certificateNumber: "2109",
    isPrivate: true,
    phoneNumbers: "+380592949243",
    regionId: 2,
    areaId: 1,
    localityId: 1,
    address: "бул. Шевченка, 6",
    id: "271268874776867164"
  },
  // {
  //   firstName: "Віктор",
  //   lastName: "Дробаха",
  //   middleName: "Анастасійович",
  //   certificateNumber: "7162",
  //   isPrivate: true,
  //   phoneNumbers: "+380592949243",
  //   regionId: 3,
  //   areaId: 1,
  //   localityId: 1, 
  //   address: "вул. Духновича, 32-а",
  //   id: "8439847398839476873"
  // },
  // {
  //   firstName: "Євгеній",
  //   lastName: "Заліпський",
  //   middleName: "Вікторович",
  //   certificateNumber: "3878",
  //   isPrivate: true,
  //   phoneNumbers: "+380592949243",
  //   regionId: 3,
  //   areaId: 1,
  //   localityId: 1, 
  //   address: "ул. Героїв Майдану, буд.25",
  //   id: "35438485135131385112"
  // },
  // {
  //   firstName: "Сергій",
  //   lastName: "Авдієнко",
  //   middleName: "Вікторович",
  //   certificateNumber: "5564",
  //   isPrivate: true,
  //   phoneNumbers: "+380592949243",
  //   regionId: 4,
  //   areaId: 1,
  //   localityId: 1, 
  //   address: "пр-т Миру, 52",
  //   id: "131929874913794017349"
  // },
  // {
  //   firstName: "Юрій",
  //   lastName: "Бендеров",
  //   middleName: "Вікторович",
  //   certificateNumber: "5597",
  //   isPrivate: true,
  //   phoneNumbers: "+380592949243",
  //   regionId: 4,
  //   areaId: 1,
  //   localityId: 1, 
  //   address: "ул. С.Крушельницької, 35",
  //   id: "81857138571835187131153"
  // },
  // {
  //   firstName: "Богатов",
  //   lastName: "Сергій",
  //   middleName: "Гейоргійович",
  //   certificateNumber: "2930",
  //   isPrivate: true,
  //   phoneNumbers: "+380592949243",
  //   regionId: 5,
  //   areaId: 1,
  //   localityId: 1, 
  //   address: "р-т Леніна, 151",
  //   id: "58435874357894334446"
  // },
];
