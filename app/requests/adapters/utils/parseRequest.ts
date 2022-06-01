import { toString, parseDate, toJalaaliDate } from "../../../library";
import type { IRequest } from "../../types";

export function parseRequest(payload: any): IRequest {
  const parsedCreatedAt = parseDate(payload.createdAt);
  const parsedModifiedAt = parseDate(payload.modifiedAt);
  return {
    customerId: toString(payload?.customerId),
    providerId: toString(payload?.providerId),
    businessId: toString(payload?.businessId),
    requestConfirmed: Boolean(payload?.requestConfirmed),
    name: toString(payload?.name),
    profilePictureUrl: toString(payload?.profilePictureUrl),
    description: toString(payload?.description),
    createdAt: parsedCreatedAt ? toJalaaliDate(parsedCreatedAt) : "",
    modifiedAt: parsedModifiedAt ? toJalaaliDate(parsedModifiedAt) : "",
  };
}
