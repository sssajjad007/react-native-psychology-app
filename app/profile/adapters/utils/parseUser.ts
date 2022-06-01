import { toString } from "../../../library";
import { IUser } from "../../types";

export function parseUser(payload: Record<string, unknown>): IUser {
  return {
    profilePictureUrl: toString(payload.profilePictureUrl),
    firstName: toString(payload.firstName),
    lastName: toString(payload.lastName),
    description: toString(payload.description),
  };
}
