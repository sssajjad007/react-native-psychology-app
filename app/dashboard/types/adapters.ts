import { ICustomer } from "./entities";
import { IProvider } from "./entities";

export interface IFetchProviderInfoResult extends IProvider {
  error: string;
}
export interface IFetchCustomersInfo {
  error: string;
  customer: ICustomer | undefined;
}
