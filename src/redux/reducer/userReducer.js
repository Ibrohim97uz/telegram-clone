import {
  ADD_FRIEND,
  RESET_STATE,
  UPDATE_CONTACT,
  USER_REGISTERED,
} from "../action/types";

const initialState = {
  name: "",
  phone: "",
  friends: [],
  username: "",
  id: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return (state = {
        ...action.payload,
      });

    case ADD_FRIEND:
      return (state = {
        ...state,
        friends: [...state.friends, action.payload],
      });

    default:
      return state;
  }
};
