import { action, makeObservable, observable } from "mobx";
import { IProvider } from "../types";

export class ProviderState {
  constructor() {
    makeObservable(this, {
      providers: observable,
      query: observable,
      searchResult: observable,
      myProvider: observable,
      requestConfirmed: observable,
      setRemoveRequest: action,
      setRemoveProvider: action,
      setProviders: action,
      setQuery: action,
      setSearchResult: action,
      setMyProvider: action,
      setRequestConfirmed: action,
    });
  }
  providers: IProvider[] = [];
  query: string = "";
  searchResult: IProvider[] = [];
  myProvider: IProvider | undefined = undefined;
  requestConfirmed: boolean = false;
  setProviders(newProviders: IProvider[]) {
    this.providers = newProviders;
  }
  setQuery(query: string) {
    this.query = query;
  }
  setSearchResult(searchResult: IProvider[]) {
    this.searchResult = searchResult;
  }
  setMyProvider(myProvider: IProvider) {
    this.myProvider = myProvider;
  }
  setRequestConfirmed(request: boolean) {
    this.requestConfirmed = request;
  }
  setRemoveRequest() {
    this.myProvider = undefined;
    this.requestConfirmed = false;
  }
  setRemoveProvider() {
    this.myProvider = undefined;
    this.requestConfirmed = false;
  }
}
