import { toString, toJalaaliDate, parseDate } from "../../../library";
import type { INote } from "../../types";

export function parseNote(payload: any): INote {
  const obj = Object(payload);
  const imageIds = obj?.imageIds;
  const createdAt = parseDate(toString(obj?.createdAt));
  const modifiedAt = parseDate(toString(obj?.modifiedAt));
  return {
    providerId: toString(obj?.providerId),
    customerId: toString(obj?.customerId),
    id: toString(obj?.id),
    title: toString(obj?.title),
    content: toString(obj?.content),
    imageIds: Array.isArray(imageIds) ? imageIds.map(toString) : [],
    createdAt: createdAt ? toJalaaliDate(createdAt) : "",
    modifiedAt: modifiedAt ? toJalaaliDate(modifiedAt) : "",
  };
}
