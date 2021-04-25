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
} from "./types";
import actions from "src/redux/actions";

const delay = (time) =>
  new Promise((resolve) => setTimeout(resolve, time * 1000));

export function* sagaWatcher() {
  yield takeLatest(FETCH_SEARCH_DATA, fetchSearchData);
  yield takeLatest(FETCH_REGION, fetchRegion);
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

    const regions = yield call(() => {});
    yield put(actions.setRegion, regions);
  } catch (e) {}
}

function* fetchArea(action) {
  try {
    const searchType = yield select((state) => state.search.searchType);
    if (searchType !== SEARCH_BY_ADDRESS) {
      return;
    }

    const region = action.payload;
    const areas = yield call(() => {}, region);
    yield put(actions.setArea, areas);
  } catch (e) {}
}

function* fetchSettlement(action) {
  try {
    const searchType = yield select((state) => state.search.searchType);
    if (searchType !== SEARCH_BY_ADDRESS) {
      return;
    }

    const area = action.payload;
    const settlement = yield call(() => {}, area);
    yield put(actions.setArea, settlement);
  } catch (e) {}
}

function* fetchSearchData(action) {
  try {
    const searchType = yield select((state) => state.search.searchType);
    const data = action ? action.payload : {};
    if (searchType === SEARCH_BY_ADDRESS) {
      const searchData = yield call(() => {}, data);
      yield put(actions.updateSearchData, searchData);
    } else if (searchType === SEARCH_BY_NAME) {
      const searchData = yield call(() => {}, data);
      yield put(actions.updateSearchData, searchData);
    } else if (searchType === SEARCH_BY_NOTARY) {
      const searchData = yield call(() => {}, data);
      yield put(actions.updateSearchData, searchData);
    }
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
