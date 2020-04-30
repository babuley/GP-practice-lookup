import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function practiceReducer(
  state = initialState.practices,
  action
) {
  switch (action.type) {
    case types.LOAD_PRACTICES_SUCCESS:
      return action.practices;
    case types.DELETE_PRACTICE_OPTIMISTIC:
      return state.filter((practice) => practice.id !== action.practice.id);
    default:
      return state;
  }
}
