import { observable, action, computed, makeObservable } from "mobx";

import type { IRequest } from "../types";

export class RequestState {
  constructor() {
    makeObservable(this, {
      requests: observable,
      setRequests: action,
      addRequest: action,
      removeRequest: action,
      requestCount: computed,
    });
  }
  requests: IRequest[] = [];

  setRequests(requests: IRequest[]) {
    this.requests = requests;
  }

  addRequest(request: IRequest) {
    const requestFound = this.requests.findIndex(
      (item) => item.customerId === request.customerId
    );
    if (requestFound === -1) {
      return this.requests.push(request);
    }
    this.requests[requestFound] = request;
    return requestFound;
  }
  removeRequest(customerId: string) {
    const result = [];
    for (let index = 0; index < this.requests.length; index++) {
      const request = this.requests[index];
      if (request.customerId === customerId) {
        continue;
      }
      result.push(request);
    }
    this.requests = result;
  }
  get requestCount(): number {
    return this.requests.length;
  }
}
