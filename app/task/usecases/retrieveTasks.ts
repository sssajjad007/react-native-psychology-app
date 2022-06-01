import { taskState } from "../entities";
import { fetchTasks } from "../adapters";
import { logger } from "../../library";

export async function retrieveTasks(customerId: string) {
  const { error, tasks, httpStatus } = await fetchTasks(customerId);
  if (httpStatus === 404) {
    taskState.setRemoveList();
  }
  if (error) {
    logger({
      container: "task",
      path: { section: "usecases", file: "retrieveTasks" },
      type: "error",
      logMessage: `Error retrieving tasks: ${error}`,
    });

    return;
  }
  taskState.setTasks(tasks);
}
