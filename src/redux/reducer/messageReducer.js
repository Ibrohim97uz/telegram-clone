import {
  CHAT_ID,
  MESSAGE_WITH,
  NEW_MESSAGE,
  USER_MESSAGE,
} from "../action/types";

const initialState = {
  messages: [],
  messageWith: "",
  chatId: "",
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_MESSAGE:
      return (state = {
        ...state,
        messages: [...action.payload],
      });
    case MESSAGE_WITH:
      return (state = {
        ...state,
        messageWith: action.payload,
      });
    case CHAT_ID:
      return (state = {
        ...state,
        chatId: action.payload,
      });
    case NEW_MESSAGE:
      return (state = {
        ...state,
        messages: [...state.messages, action.payload],
      });
    default:
      return state;
  }
};
