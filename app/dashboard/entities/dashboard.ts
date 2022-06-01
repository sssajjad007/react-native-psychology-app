import { observable, action, makeObservable } from "mobx";
import { ICustomer, IProvider } from "../types";

export class DashboardState {
  constructor() {
    makeObservable(this, {
      provider: observable,
      setProvider: action,
      customer: observable,
      setCustomer: action,
    });
  }
  provider: IProvider | undefined = undefined;
  setProvider(provider: IProvider) {
    this.provider = provider;
  }
  customer: ICustomer | undefined = undefined;
  setCustomer(customer: ICustomer | undefined) {
    this.customer = customer;
  }
}
