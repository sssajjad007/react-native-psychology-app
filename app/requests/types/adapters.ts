import type { IRequest } from "./entities";

export interface IFetchConfirmRequestResult {
  error: string;
  request: IRequest;
}

export interface IFetchRejectRequestResult {
  error: string;
  removed: boolean;
}

export interface IFetchRequestsResult {
  error: string;
  requests: IRequest[];
}
