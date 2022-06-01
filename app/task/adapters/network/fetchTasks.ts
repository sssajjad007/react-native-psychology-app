import { toJalaaliDate } from "../utils";
import { request, toString } from "../../../library";
import { IFetchTasksPayload, ITask } from "../../types";

export async function fetchTasks(
  customerId: string
): Promise<IFetchTasksPayload> {
  const { error, httpStatus, payload, success } = await request({
    body: undefined,
    endpoint: `/tasks/${customerId}`,
    method: "GET",
  });
  if (!success) {
    return {
      error: error,
      tasks: [],
      httpStatus,
    };
  }
  if (Array.isArray(payload)) {
    const result: ITask[] = [];
    for (let index = 0; index < payload.length; index++) {
      const task = payload[index];

      const createdAt =
        Date.parse(task?.createdAt) !== NaN
          ? toJalaaliDate(new Date(task?.createdAt))
          : "";
      const modifiedAt =
        Date.parse(task?.modifiedAt) !== NaN
          ? toJalaaliDate(new Date(task?.modifiedAt))
          : "";
      result.push({
        userId: toString(task?.userId),
        id: toString(task?.id),
        content: toString(task?.content),
        done: Boolean(task?.done),
        createdAt,
        modifiedAt,
      });
    }
    return {
      error: "",
      tasks: result,
      httpStatus,
    };
  }
  return {
    error: "must be array",
    tasks: [],
    httpStatus,
  };
}
