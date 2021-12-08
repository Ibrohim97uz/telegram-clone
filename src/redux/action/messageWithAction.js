import { MESSAGE_WITH } from "./types";

export const message_with_action = (payload) => {
  return {
    type: MESSAGE_WITH,
    payload,
  };
};
