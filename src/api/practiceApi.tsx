import { handleResponse, handleError } from "./apiUtils";
import { Practice } from 'model/core';
const baseUrl = process.env.API_URL + "/practices/";

export function getPractices() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savePractice(practice:Practice) {
  return fetch(baseUrl + (practice.id || ""), {
    method: practice.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(practice),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePractice(practiceId:string) {
  return fetch(baseUrl + practiceId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
