// import {takeEvery, put, call, select, all} from 'redux-saga/effects'
// import {} from './types'
// import {hideErrorMessage, hideLoader, showErrorMessage, showLoader} from './actions'

// const delay = time => new Promise(resolve => setTimeout(resolve, time*1000));

export function* sagaWatcher() {
  // yield takeEvery(REQUEST_POSTS, fetchPostsWorker)
  // yield takeEvery(REQUEST_USERS, fetchUsersWorker)
  // yield takeEvery(SELECT_USER, selectUserWorker)
}
//takeevery takeLatest takeLeading

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

