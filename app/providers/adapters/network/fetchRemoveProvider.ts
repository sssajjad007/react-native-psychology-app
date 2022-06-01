import { request } from "../../../library";

export async function fetchRemoveProvider(id: string) {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "/business/provider",
    method: "DELETE",
    body: undefined,
  });
  if (error) {
    return {
      error,
      payload: "",
    };
  }
  return { error: "", payload };
}
