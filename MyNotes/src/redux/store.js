import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../redux/index';
import createSagaMiddleware from 'redux-saga';
import {userSaga} from '../Core/Dashboard/userSaga';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const middleware = [sagaMiddleware];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(userSaga);

  return store;
}
