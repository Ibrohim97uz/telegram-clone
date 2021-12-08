import { CLEAR_SEARCH, CREATE_CHAT } from "./types";

export const search_reducer = (payload) => {
  return {
    type: CREATE_CHAT,
    payload,
  };
};
export const clear_search = (payload) => {
  return {
    type: CLEAR_SEARCH,
    payload,
  };
};
