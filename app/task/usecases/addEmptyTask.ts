import { taskState } from "../entities";

export function addEmptyTask() {
  if (!taskState.emptyTaskExist) {
    taskState.addTask({
      id: `${Math.random()}`,
      content: "",
      createdAt: "",
      modifiedAt: "",
      done: false,
      userId: "",
    });
  }
}
