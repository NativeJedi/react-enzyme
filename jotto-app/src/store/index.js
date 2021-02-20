import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './root.reducer';

export const middlewares = [ReduxThunk];

const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolCompose } = window;
const composeEnhancers = devToolCompose || compose;
const composedMiddlewares = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composedMiddlewares);

export default store;
