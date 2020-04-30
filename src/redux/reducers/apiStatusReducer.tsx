import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const SUCCESS = "_SUCCESS";

function isActionSuccess(type) {
  return type.substring(type.length - SUCCESS.length) === SUCCESS;
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type == types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    isActionSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
}
