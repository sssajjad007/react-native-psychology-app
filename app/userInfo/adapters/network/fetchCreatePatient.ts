import { request } from "../../../library";

import { IPatient } from "../../types";

export async function fetchCreatePatient(body: IPatient, customerId: String) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/users/patients/${customerId}`,
    method: "POST",
    body: Object(body),
  });
  if (!success) {
    return {
      error,
      patient: {},
    };
  }
  return {
    error: "",
    patient: payload,
  };
}
