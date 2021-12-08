import { CHAT_ID } from "./types";

export const chat_id_action = (payload) => {
  return {
    type: CHAT_ID,
    payload,
  };
};
