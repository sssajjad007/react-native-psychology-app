import { toString } from "../../../library";
import { ICustomer } from "../../types";

export function parseCustomer(payload: any): ICustomer {
  const obj = Object(payload);
  return {
    id: toString(obj?.id),
    firstName: toString(obj?.firstName),
    lastName: toString(obj?.lastName),
    description: toString(obj?.description),
    profilePictureUrl: toString(obj?.profilePictureUrl),
  };
}
