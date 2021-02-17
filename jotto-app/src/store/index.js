import { createStore } from 'redux';
import rootReducer from './root.reducer';

const { __REDUX_DEVTOOLS_EXTENSION__: devTool } = window;
const reduxDevTool = devTool && devTool();

const store = createStore(rootReducer, reduxDevTool);

export default store;
