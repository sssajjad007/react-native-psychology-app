import { observable, action, makeObservable } from "mobx";
import type { ICustomer } from "../types";

export class CustomerState {
  constructor() {
    makeObservable(this, {
      customers: observable,
      query: observable,
      searchResult: observable,
      setCustomers: action,
      setQuery: action,
      setSearchResult: action,
      removeCustomer: action,
    });
  }
  customers: ICustomer[] = [];
  query: string = ""
  searchResult: ICustomer[] = [];
  setCustomers(customers: ICustomer[]) {
    this.customers = customers;
  }
  setQuery(query: string) {
    this.query = query;
  }
  setSearchResult(searchResult: ICustomer[]) {
    this.searchResult = searchResult;
  }
  removeCustomer(customerId: string) {
    this.customers = this.customers.filter(
      (customer) => customer.customerId !== customerId
    );
  }
}
