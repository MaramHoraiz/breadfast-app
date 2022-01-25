import { all } from 'redux-saga/effects';
import {
    fetchPostsActionWatcher,
    editPostActionWatcher,
    deletePostActionWatcher
} from '../sagas/session';

export default function* rootSaga() {
  yield all([
    fetchPostsActionWatcher(),
    editPostActionWatcher(),
    deletePostActionWatcher()
  ]);
}