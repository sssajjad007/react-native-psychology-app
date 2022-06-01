import { fetchTaskDone } from "../adapters";
import { taskState } from "../entities";

export async function taskDone(taskId: string, userId: string) {
  const done = await fetchTaskDone(taskId, userId);
  if (done) {
    taskState.setTaskDone(taskId);
  } else {
    console.log({ taskId, done });
  }
}
