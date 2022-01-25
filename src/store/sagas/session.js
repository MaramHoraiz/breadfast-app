import { call, put, takeLatest } from 'redux-saga/effects';

import axios from '../../utils/axios';
import config from '../../config.json';
import * as actions from '../actionTypes';
import {
  fillPostsData,
  deletePostSuccess,
} from '../actionsCreators/session';

/**
 * getPosts Operation using saga
 */
// get posts API
async function getPostsApi() {
  try {
    return axios.request({
      method: 'get',
      url: config.getPost,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.log(e);
  }
}

// Saga function that handles the side effect when the postActionWatcher is triggered
export function* fetchPostsActionEffect() {
  try {
    let data = yield call(getPostsApi);
    yield put(fillPostsData(data));
  } catch (e) {}
}
// Saga function that is initiated in the beginning to be able to listen to FETCH_POST_WATCHER action
export function* fetchPostsActionWatcher() {
  yield takeLatest(actions.FETCH_POST_WATCHER, fetchPostsActionEffect);
}

/**
 * delete post Operation using saga
 */
// delete API
function deletePostApi(data) {
  return axios.request({
    method: 'delete',
    url: config.editDeletePost.replace('{0}', data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
// Saga function that handles the side effect when the deletePostActionWatcher is triggered
export function* deletePostActionEffect(deletePostAction) {
  let { payload, resolve, reject } = deletePostAction;

  try {
    let data = yield call(deletePostApi, payload);
    yield put(deletePostSuccess({id:payload, isDeleted: true}));

    if (resolve) resolve(data);
  } catch (e) {
    yield put(deletePostSuccess({id:payload, isDeleted: false}));

    if (reject) reject(e);
  }
}
// Saga function that is initiated in the beginning to be able to listen to DELETE_POST_WATCHER action
export function* deletePostActionWatcher() {
  yield takeLatest(actions.DELETE_POST_WATCHER, deletePostActionEffect);
}

/**
 * edit post Operation using saga
 */
// edit API
function editPostApi(data) {
  return axios.request({
    method: 'put',
    url: config.editDeletePost.replace('{0}', data.id),
    headers: {
      'Content-Type': 'application/json',
    },
    data:[data]
  });
}
// Saga function that handles the side effect when the editPostActionEffect is triggered
export function* editPostActionEffect(editPostAction) {
  let { payload, resolve, reject } = editPostAction;
  try {
    let data = yield call(editPostApi, payload);
    if (resolve) resolve(data);
  } catch (e) {
    if (reject) reject(e);

  }
}
// Saga function that is initiated in the beginning to be able to listen to EDIT_POST_WATCHER action
export function* editPostActionWatcher() {
  yield takeLatest(actions.EDIT_POST_WATCHER, editPostActionEffect);
}
