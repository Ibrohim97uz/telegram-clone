import { combineReducers } from "redux";
import chatReducer from "./chat";
import { search_reducer } from "./search";
import { user_reducer } from "./user";

const rootReducer = combineReducers({
  chat: chatReducer,
  user: user_reducer,
  search: search_reducer,
});

export default rootReducer;
