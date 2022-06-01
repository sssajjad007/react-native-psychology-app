import { request } from "../../../library";

export async function fetchRemoveTask(taskId: string, customerId: string) {
  const { success } = await request({
    endpoint: `/tasks/${taskId}/${customerId}`,
    method: "DELETE",
    body: undefined,
  });
  return success;
}
