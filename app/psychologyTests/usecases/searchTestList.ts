import Fuse from "fuse.js";
import { testListState } from "../entities";

const fuse = new Fuse(testListState.tests, { keys: ["title.fa", "title.en"] });

export function searchTestList(query: string) {
  testListState.setQuery(query);
  fuse.setCollection(testListState.tests);
  const result = fuse.search(query);
  const tests = [];
  for (let index = 0; index < result.length; index++) {
    const { item } = result[index];
    tests.push(item);
  }
  testListState.setSearchResult(tests);
}
