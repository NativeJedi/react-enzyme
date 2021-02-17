import { CORRECT_GUESS } from './success.types';

export const INITIAL_STATE = {
  isSuccess: false,
};

const successReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case CORRECT_GUESS:
      return {
        ...state,
        isSuccess: true,
      };
    default:
      return INITIAL_STATE;
  }
};

export default successReducer;
