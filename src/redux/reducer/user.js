import { USER_DATA } from "../action/types";

const initialState = {
  user: {},
};

export const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      localStorage.setItem("userId", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
