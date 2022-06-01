import { request, toString } from "../../../library";
import { toJalaaliDate } from "../utils";
import { IFetchCreateTaskPayload } from "../../types";
export async function fetchCreateTask(
  content: string,
  userId: string | undefined
): Promise<IFetchCreateTaskPayload> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/tasks",
    body: {
      content,
      userId,
    },
    method: "POST",
  });
  if (!success) {
    return {
      error: String(error),
      task: {
        id: "",
        content: "",
        userId: "",
        done: false,
        createdAt: "",
        modifiedAt: "",
      },
    };
  }
  const createdAt =
    Date.parse(toString(payload?.createdAt)) !== NaN
      ? toJalaaliDate(new Date(toString(payload?.createdAt)))
      : "";
  const modifiedAt =
    Date.parse(toString(payload?.modifiedAt)) !== NaN
      ? toJalaaliDate(new Date(toString(payload?.modifiedAt)))
      : "";
  return {
    error: "",
    task: {
      userId: toString(payload?.userId),
      id: toString(payload?.id),
      content: toString(payload?.content),
      done: Boolean(payload?.done),
      createdAt,
      modifiedAt,
    },
  };
}
