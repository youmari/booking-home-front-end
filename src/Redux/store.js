import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import loginReducer from './Login/Login';
import registerReducer from './Register/Register';
import apartmentsReducer from './Apartments/Apartments';
import apartmentsDetailsReducer from './Details/Details';

const reducers = combineReducers({
  LogIn: loginReducer,
  Register: registerReducer,
  Apartments: apartmentsReducer,
  Details: apartmentsDetailsReducer,
});

const middlewares = [thunk, logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
