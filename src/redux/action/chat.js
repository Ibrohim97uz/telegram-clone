import {
  ADD_FRIEND,
  LOAD_MESSAGES,
  NEW_MESSAGE,
  SET_FRIEND,
  TEMP_CHAT_ID,
} from "./types";

export const NewMessage = (message) => {
  return {
    type: NEW_MESSAGE,
    payload: message,
  };
};

export const add_friend = (payload) => {
  return {
    type: ADD_FRIEND,
    payload,
  };
};
export const load_message = (payload) => {
  return {
    type: LOAD_MESSAGES,
    payload,
  };
};
export const temp_Chat_Id = (payload) => {
  return {
    type: TEMP_CHAT_ID,
    payload,
  };
};
export const setter_friend = (payload) => {
  return {
    type: SET_FRIEND,
    payload,
  };
};
