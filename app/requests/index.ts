import { requestState } from "./entities";

export function requestCount(): number {
  return requestState.requestCount;
}

export * from "./screens";
export { retrieveRequests } from "./usecases";
