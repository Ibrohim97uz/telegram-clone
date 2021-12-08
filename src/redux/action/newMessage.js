import { NEW_MESSAGE } from "./types";

export const new_message_action = (payload) => {
  return {
    type: NEW_MESSAGE,
    payload,
  };
};
