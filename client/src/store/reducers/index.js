import { combineReducers } from "redux";

import catalogReducer from "./catalogReducers/catalogReducer";
import authReducer from "./authReducer";
import uiReducer from "./ui/uiReducer";
export default combineReducers({
  books: catalogReducer,
  user: authReducer,
  ui: uiReducer
});
