// import { applyMiddleware, compose, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers/articleReducer';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers/articleReducer';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
