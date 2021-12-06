import {
  ADD_FRIEND,
  LOAD_MESSAGES,
  NEW_MESSAGE,
  SET_FRIEND,
  TEMP_CHAT_ID,
} from "../action/types";

const initialState = {
  messages: [],
  friend: [],
  tempChatId: "",
  setterFriend: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      localStorage["messages"] = JSON.stringify([
        ...state.messages,
        action.payload,
      ]);
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: [...action.payload],
      };
    case TEMP_CHAT_ID:
      return {
        ...state,
        tempChatId: action.payload,
      };
    case SET_FRIEND:
      return {
        ...state,
        setterFriend: [...action.payload],
      };
    case ADD_FRIEND:
      state = {
        ...state,
        friend: [
          ...state.friend,
          {
            chatId: action.payload.id,
            name: action.payload.name,
            phone: action.payload.phone,
          },
        ],
      };

    default:
      return state;
  }
};

export default chatReducer;
