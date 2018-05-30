import { combineReducers } from "redux";

import bookReducer from "./catalogReducers/bookReducer";
import authReducer from "./authReducer";
import uiReducer from "./ui/uiReducer";
export default combineReducers({
  books: bookReducer,
  user: authReducer,
  ui: uiReducer
});
