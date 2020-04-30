import * as types from "./actionTypes";
import * as practiceApi from "../../api/practiceApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { Practice } from "model/core";
import { Dispatch } from 'react';

export function loadPracticesSuccess(practices: Practice[]) {
  return { type: types.LOAD_PRACTICES_SUCCESS, practices };
}

export function deletePracticeOptimistc(practice: Practice) {
  return { type: types.DELETE_PRACTICE_OPTIMISTIC, practice };
}

export function loadPractices(page:number, limit:number) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return practiceApi
      .getPractices(page, limit)
      .then((practices) => {
        dispatch(loadPracticesSuccess(practices));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deletePractice(practice) {
  return function(dispatch) {
    dispatch(deletePracticeOptimistc(practice));
    return practiceApi.deletePractice(practice.id);
  };
}
