import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import rootSaga from './sagas';
import reducers from './reducers';

/**
 * History of choice
 * Browser history is used in this case
 */
const history = createHistory();

/**
 * Saga Middleware
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * middleWares for redux
 * For intercepting and dispatching navigation actions
 */
const historyMiddleware = routerMiddleware(history);

let middleWares;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  middleWares = applyMiddleware(historyMiddleware, sagaMiddleware);

  // middleWares = applyMiddleware(sagaMiddleware);
} else {
  middleWares = applyMiddleware(logger, historyMiddleware, sagaMiddleware);
}

const store = createStore(
  reducers,
  compose(
    middleWares,
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' &&
    process.env.NODE_ENV !== 'production'
      ? window.devToolsExtension()
      : f => f
  )
);

sagaMiddleware.run(rootSaga);

export default store;

export { history };