import Fuse from "fuse.js";
import { providerState } from "../entities";

const fuse = new Fuse(providerState.providers, {
  keys: ["firstName", "lastName"],
});

export function searchProviders(query: string) {
  providerState.setQuery(query);
  fuse.setCollection(providerState.providers);
  const result = fuse.search(query);
  const providers = [];
  for (let index = 0; index < result.length; index++) {
    const { item } = result[index];
    providers.push(item);
  }
  providerState.setSearchResult(providers);
}
