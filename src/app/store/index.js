import { createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';
import reducers from './reducers';
import logger from 'redux-logger';
import rootSaga from './sagas';
const saga = reduxSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(logger, saga))
);
saga.run(rootSaga);
export default store;
