import Fuse from "fuse.js";
import { customerState } from "../entities";


const fuse = new Fuse(customerState.customers, {keys: ["name"]});

export function searchCustomers(query: string) {
  customerState.setQuery(query);
  fuse.setCollection(customerState.customers);
  const result = fuse.search(query);
  const customers = [];
  for (let index = 0; index < result.length; index++) {
    const { item } = result[index];
    customers.push(item);
  }
  customerState.setSearchResult(customers);
}