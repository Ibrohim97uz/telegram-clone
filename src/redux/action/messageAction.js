import { USER_MESSAGE } from "./types";

export const message_action = (payload) => {
  return {
    type: USER_MESSAGE,
    payload,
  };
};
