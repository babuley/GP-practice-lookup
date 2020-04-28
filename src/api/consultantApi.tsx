import { handleResponse, handleError } from "./apiUtils";
import { Consultant } from 'model/core';
const baseUrl = process.env.API_URL + "/consultants/";

export function getConsultants()  {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveConsultant(consultant:Consultant) {
  return fetch(baseUrl + (consultant.id || ""), {
    method: consultant.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(consultant),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteConsultant(consultantId:string) {
  return fetch(baseUrl + consultantId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
