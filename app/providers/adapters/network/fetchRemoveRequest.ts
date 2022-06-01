import { request } from "../../../library";

export async function fetchRemoveRequest() {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "/business/requests",
    method: "DELETE",
    body: undefined,
  });
  if (error) {
    return { error, payload: "" };
  }
  return { error: "", payload };
}
