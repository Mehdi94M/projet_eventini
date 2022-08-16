import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";
import eventReducer from "./eventReducer";
const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  userReducer,
  eventReducer,
});
export default rootReducer;
