import { observable, action, makeObservable } from "mobx";
import { ITest } from "../types";

export class TestListState {
  constructor() {
    makeObservable(this, {
      tests: observable,
      query: observable,
      searchResult: observable,
      setTests: action,
      setQuery: action,
      setSearchResult: action,
    });
  }

  tests: ITest[] = [];
  query: string = "";
  searchResult: ITest[] = [];
  setTests(tests: ITest[]) {
    this.tests = tests;
  }
  setQuery(query: string) {
    this.query = query;
  }
  setSearchResult(searchResult: ITest[]) {
    this.searchResult = searchResult;
  }
}
