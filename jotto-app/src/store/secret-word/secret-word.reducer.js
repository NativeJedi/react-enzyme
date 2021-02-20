import { SET_SECRET_WORD } from './secret-word.types';

const secretWordReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default secretWordReducer;
