import {
  ADD_MESSAGE
} from './actions';

export function MessagesReducer(state = [], action) {
  switch(action.type) {
    case ADD_MESSAGE:
      return  [...state, { text: action.message, user: 'Montana' }]
    default:
      return state;
  }
};

export function ChatUsersReducer(state = [], action) {
  switch(action.type) {
    default:
      return state;
  }
};