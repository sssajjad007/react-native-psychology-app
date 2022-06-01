import { ICustomer } from "./entities";

export interface IFetchGetRequests {
  error: string;
  customers: ICustomer[];
}
