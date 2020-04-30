import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function consultantReducer(
  state = initialState.consultants,
  action
) {
  switch (action.type) {
    case types.LOAD_CONSULTANTS_SUCCESS:
      return action.consultants;
    case types.DELETE_CONSULTANT_OPTIMISTIC:
      return state.filter((consultant) => consultant.id !== action.consultant.id);
    default:
      return state;
  }
}
