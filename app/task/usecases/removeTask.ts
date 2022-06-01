import { fetchRemoveTask } from "../adapters";
import { taskState } from "../entities";

export async function removeTask(
  taskId: string,
  customerId: string
) {
  const removed = await fetchRemoveTask(taskId, customerId);
  if (!removed) {
    // show error
    return;
  }
  taskState.removeTask(taskId);
}
