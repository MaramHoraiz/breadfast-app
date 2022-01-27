import * as actions from '../actionTypes';

// Worker triggering actionCreators
export function fetchPostsActionWatcher(resolve, reject) {
  return { type: actions.FETCH_POST_WATCHER, resolve, reject };
}
export function editPostActionWatcher(payload, resolve, reject) {
  return { type: actions.EDIT_POST_WATCHER, payload: payload, id:payload.id, resolve, reject };
}
export function deletePostActionWatcher(payload,resolve, reject) {
  return { type: actions.DELETE_POST_WATCHER, payload,resolve, reject };
}

// Redux state changing actionCreators
export function fillPostsData(data) {
  return { type: actions.FILL_POSTS_DATA, payload: data };
}
export function deletePostSuccess(success) {
  return { type: actions.DELETE_POST_SUCCESS, payload: success };
}
export function editPostSuccess(success) {
  return { type: actions.EDIT_POST_SUCCESS, payload: success };
}
