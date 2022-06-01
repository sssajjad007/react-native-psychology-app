import { toString, parseDate } from "../../../library";
import type { IProvider } from "../../types";

export function parseProvider(payload: any): IProvider {
  const obj = Object(payload);
  const createdAt = parseDate(obj?.createdAt);
  const modifiedAt = parseDate(obj?.modifiedAt);
  return {
    id: toString(obj?.id),
    username: toString(obj?.username),
    firstName: toString(obj?.firstName),
    lastName: toString(obj?.lastName),
    description: toString(obj?.description),
    gender: obj?.gender === "male" ? "male" : "female",
    profilePictureUrl: toString(obj?.profilePictureUrl),
    address: toString(obj?.address),
    birthday: toString(obj?.birthday),
    telephone: toString(obj?.telephone),
    createdAt: createdAt ? createdAt : new Date(),
    modifiedAt: modifiedAt ? modifiedAt : new Date(),
  };
}
