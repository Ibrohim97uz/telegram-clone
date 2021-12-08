import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { messageReducer } from "../reducer/messageReducer";
import { userReducer } from "../reducer/userReducer";
import { searchReducer } from "../reducer/searchReducer";

const rootReducer = combineReducers({
  messageReducer,
  userReducer,
  searchReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
