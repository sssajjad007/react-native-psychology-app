import { action, makeObservable, observable, computed } from "mobx";
import { logger } from "../../library";
import { ITask } from "../types";
export class TaskState {
  constructor() {
    makeObservable(this, {
      tasks: observable,
      currentEditTask: observable,
      setTasks: action,
      addTask: action,
      updateTask: action,
      setRemoveList: action,
      removeTask: action,
      setTaskDone: action,
      taskList: computed,
      emptyTaskExist: computed,
    });
  }
  tasks: ITask[] = [];
  currentEditTask: ITask | undefined = undefined;
  setRemoveList() {
    this.tasks = [];
  }
  setTasks(list: ITask[]) {
    this.tasks = list;
  }
  addTask(task: ITask) {
    this.tasks.push(task);
  }
  updateTask(task: ITask) {
    for (let index = 0; index < this.tasks.length; index++) {
      const id = this.tasks[index].id;
      if (id === task.id) {
        this.tasks[index] = task;
        break;
      }
    }
  }
  // updateEmptyTask(task: ITask, emptyId: string) {
  //   for (let index = 0; index < this.tasks.length; index++) {
  //     const id = this.tasks[index].id;
  //     if (id === emptyId) {
  //       this.tasks[index] = task;
  //       break;
  //     }
  //   }
  // }
  removeTask(taskId: string) {
    const result: ITask[] = [];
    for (let index = 0; index < this.tasks.length; index++) {
      const task = this.tasks[index];
      logger({
        container: "task",
        path: { section: "entities", file: "Task" },
        type: "debug",
        logMessage: `taskId: ${taskId} task.id, ${task.id}`,
      });

      if (task.id === taskId) {
        continue;
      }
      result.push(task);
    }
    this.tasks = result;
  }
  setTaskDone(taskId: string) {
    for (let index = 0; index < this.tasks.length; index++) {
      const id = this.tasks[index].id;
      if (id === taskId) {
        this.tasks[index].done = true;
        break;
      }
    }
  }
  setCurrentEditTask(taskId: string | undefined) {
    if (!taskId) {
      this.currentEditTask = undefined;
      return;
    }
    const task = this.tasks.find((task) => task.id === taskId);
    if (!task) {
      this.currentEditTask = undefined;
      return;
    } // TODO: warning here
    this.currentEditTask = task;
  }
  get taskList() {
    const done: ITask[] = [];
    const undone: ITask[] = [];
    const len = this.tasks.length;
    for (let index = 0; index < len; index++) {
      const task = this.tasks[index];
      if (task.done) {
        done.push(task);
      } else {
        undone.push(task);
      }
    }
    // TODO: this line can be optimized further
    return done.concat(undone);
  }
  get emptyTaskExist() {
    for (let index = 0; index < this.tasks.length; index++) {
      const { content, createdAt, modifiedAt } = this.tasks[index];
      if (!content && !createdAt && !modifiedAt) {
        return true;
      }
    }
    return false;
  }
}
