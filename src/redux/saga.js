import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from './userSlice'

// API call function
const fetchUsersApi = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

// Worker Saga
function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsersApi)
    yield put(fetchUsersSuccess(response.data))
  } catch (error) {
    yield put(fetchUsersFailure(error.message))
  }
}

// Watcher Saga
function* rootSaga() {
  yield takeEvery(fetchUsersRequest.type, fetchUsersSaga)
}

export default rootSaga