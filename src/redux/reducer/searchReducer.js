import { CLEAR_SEARCH, CREATE_CHAT } from "../action/types";

const initialState = {
  isHidden: true,
  searchName: "",
  searchFriendId: "",
  phone: "",
};
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHAT:
      return (state = {
        ...action.payload,
      });
    case CLEAR_SEARCH:
      return (state = initialState);
    default:
      return state;
  }
};
