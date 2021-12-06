import { DEACTIVATE_SEARCH_RESULT, SEARCH_RESULT } from "./types";

export const search_result = (payload) => {
  return {
    type: SEARCH_RESULT,
    payload,
  };
};

export const deactivate_search_result = () => {
  return {
    type: DEACTIVATE_SEARCH_RESULT,
  };
};
