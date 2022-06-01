import { request } from "../../../library";
import { toJalaaliDate } from "../utils";
import { IFetchCreateTaskPayload, IFetchUpdateTask } from "../../types";

export async function fetchUpdateTask(
  info: IFetchUpdateTask
): Promise<IFetchCreateTaskPayload> {
  const { taskId, content, userId } = info;
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/tasks",
    body: {
      taskId,
      content,
      userId,
    },
    method: "PATCH",
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
    Date.parse(String(payload?.createdAt)) !== NaN
      ? toJalaaliDate(new Date(String(payload?.createdAt)))
      : "";
  const modifiedAt =
    Date.parse(String(payload?.modifiedAt)) !== NaN
      ? toJalaaliDate(new Date(String(payload?.modifiedAt)))
      : "";
  return {
    error: "",
    task: {
      userId: String(payload?.userId),
      id: String(payload?.id),
      content: String(payload?.content),
      done: Boolean(payload?.done),
      createdAt,
      modifiedAt,
    },
  };
}
