import { fetchUpdateTask } from "../adapters";
import { taskState } from "../entities";
import { IUpdateTask } from "../types";

export async function updateTask(info: IUpdateTask) {
  const { error, task } = await fetchUpdateTask(info);
  if (error) {
    console.log(error);
    return;
  }
  taskState.updateTask(task);
}
