import { fetchCreateTask } from "../adapters";
import { taskState } from "../entities";

export async function createTask(
  // emptyId: string,
  content: string,
  customerId: string
) {
  // if (taskState.newTask.length < 3) {
  //   taskState.setTaskValidation(["تسک خود رو به طور کامل تعریف کنید."]);
  //   return;
  // }
  const { error, task } = await fetchCreateTask(content, customerId);
  if (error) {
    // taskState.setNewTask("");
    console.log({ createTaskError: error });
    return false;
  }
  // console.log({ taskResult: task });
  taskState.addTask(task);
  // console.log(taskState.tasks);
  return true;
}
