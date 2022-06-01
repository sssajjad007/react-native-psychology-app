import { registerNetInfo } from "./netListener";

export const unsubscribeNetInfo = registerNetInfo();

export { netInfoState } from "./netInfoState";
export { updateNetInfo } from "./netListener";
