import { request } from "../../../library";

export async function fetchTaskDone(taskId: string, userId: string) {
  const { success, error, httpStatus, payload } = await request({
    body: {
      taskId,
      userId,
    },
    endpoint: "/tasks/done",
    method: "PATCH",
  });
  return success;
}
