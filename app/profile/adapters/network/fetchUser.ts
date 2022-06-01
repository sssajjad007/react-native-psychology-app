import { request } from "../../../library";
import { parseUser } from "../utils";

export async function fetchUser() {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/users/",
    method: "GET",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error,
      user: undefined,
    };
  }
  return {
    error: "",
    user: parseUser(payload),
  };
}
