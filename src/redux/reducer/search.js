import { DEACTIVATE_SEARCH_RESULT, SEARCH_RESULT } from "../action/types";

const initial_state = {
  name: "",
  phone: "",
  id: "",
  isActive: false,
};

export const search_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return (state = {
        name: action.payload.name,
        phone: action.payload.phone,
        id: action.payload.id,
        isActive: true,
      });
    case DEACTIVATE_SEARCH_RESULT:
      state = {
        name: "",
        phone: "",
        isActive: false,
      };

    default:
      return state;
  }
};
