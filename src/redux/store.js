import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import { MessagesReducer, ChatUsersReducer } from './reducer';


const middleware = store => next => action => {
  console.log('Initial State:', store) 
  console.log('Current:', store.getState())
  return next(action);
}

export default createStore(
  combineReducers({
    messages: MessagesReducer,
    users: ChatUsersReducer 
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxLogger)
);

