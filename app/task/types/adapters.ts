import { ITask } from "./entities";
export interface IFetchTasksPayload {
  error: string;
  tasks: ITask[];
  httpStatus: number;
}

export interface IFetchCreateTaskPayload {
  error: string;
  task: ITask;
}

export interface IFetchUpdateTask {
  taskId: string;
  content: string;
  userId: string | undefined;
}
