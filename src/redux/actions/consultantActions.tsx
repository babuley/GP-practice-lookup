import * as types from "./actionTypes";
import * as consultantApi from "../../api/consultantApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { Consultant } from "model/core";


export function loadConsultantsSuccess(consultants: Consultant[]) {
  return { type: types.LOAD_CONSULTANTS_SUCCESS, consultants};
}

export function deleteConsultantOptimistc(consultant: Consultant) {
  return { type: types.DELETE_CONSULTANT_OPTIMISTIC, consultant };
}

export function loadConsultants(page:number, limit:number) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return consultantApi
      .getConsultants(page, limit)
      .then((consultants) => {
        dispatch(loadConsultantsSuccess(consultants));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteConsultant(consultant: Consultant) {
  return function(dispatch) {
    dispatch(deleteConsultantOptimistc(consultant));
    return consultantApi.deleteConsultant(consultant.id);
  };
}
