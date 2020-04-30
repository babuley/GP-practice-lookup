import { combineReducers } from "redux";
import practices from "./practiceReducer";
import consultants from "./consultantReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  practices: practices,
  consultants: consultants,
  apiCallsInProgress: apiCallsInProgress,
});

export default rootReducer;
