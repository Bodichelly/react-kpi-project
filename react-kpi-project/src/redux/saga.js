import {
  takeEvery,
  put,
  call,
  select,
  all,
  takeLatest,
} from "redux-saga/effects";
import {
  UPDATE_SEARCH_DATA,
  FETCH_SEARCH_DATA,
  FETCH_REGION,
  SEARCH_BY_ADDRESS,
  SEARCH_BY_NAME,
  SEARCH_BY_NOTARY,
  FETCH_AREA,
  FETCH_SETTLEMENT,
} from "./types";
import actions from "src/redux/actions";

const delay = (time) =>
  new Promise((resolve) => setTimeout(resolve, time * 1000));

export function* sagaWatcher() {
  yield takeLatest(FETCH_SEARCH_DATA, fetchSearchData);
  yield takeLatest(FETCH_REGION, fetchRegion);
  yield takeLatest(FETCH_AREA, fetchArea);
  yield takeLatest(FETCH_SETTLEMENT, fetchSettlement);
  // yield takeEvery(REQUEST_POSTS, fetchPostsWorker)
  // yield takeEvery(REQUEST_USERS, fetchUsersWorker)
  // yield takeEvery(SELECT_USER, selectUserWorker)
}
//takeevery takeLatest takeLeading

function* fetchRegion(action) {
  try {
    const searchType = yield select((state) => state.search.searchType);
    if (searchType !== SEARCH_BY_ADDRESS) {
      return;
    }

    const regions = yield call(getRegions);

    yield put(actions.setRegion(regions));
  } catch (e) {}
}

function* fetchArea(action) {
  try {
    const searchType = yield select((state) => state.search.searchType);
    if (searchType !== SEARCH_BY_ADDRESS) {
      return;
    }

    const region = action.payload;
    const areas = yield call(getAreasByRegionId, region.id);
    yield put(actions.setArea(areas));
  } catch (e) {}
}

function* fetchSettlement(action) {
  try {
    const searchType = yield select((state) => state.search.searchType);
    if (searchType !== SEARCH_BY_ADDRESS) {
      return;
    }

    const area = action.payload;
    const settlements = yield call(getLocalitiesByAreaId, area.id);
    yield put(actions.setArea(settlements));
  } catch (e) {}
}

function* fetchSearchData(action) {
  try {
    // const searchType = yield select((state) => state.search.searchType);
    // const data = action ? action.payload : {};
    // if (searchType === SEARCH_BY_ADDRESS) {
    //   const searchData = yield call(() => {}, data);
    //   yield put(actions.updateSearchData(searchData));
    // } else if (searchType === SEARCH_BY_NAME) {
    //   const searchData = yield call(() => {}, data);
    //   yield put(actions.updateSearchData(searchData));
    // } else if (searchType === SEARCH_BY_NOTARY) {
    //   const searchData = yield call(() => {}, data);
    yield put(actions.showLoader());
    yield call(delay, 1);
      yield put(actions.updateSearchData(notaries));
      yield put(actions.hideLoader());
    //}
  } catch (e) {}
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
  const response = await fetch("http://localhost:3000/api/regions");
  return response.json();
}

async function getAreasByRegionId(id) {
  const response = await fetch(`http://localhost:3000/api/areas?id=${id}`);
  return response.json();
}

async function getLocalitiesByAreaId(id) {
  const response = await fetch(`http://localhost:3000/api/localities?id=${id}`);
  return response.json();
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
