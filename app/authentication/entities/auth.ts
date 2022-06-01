import { action, computed, makeObservable, observable } from "mobx";
import { entityTypes } from "../types";
export class AuthState {
  constructor() {
    makeObservable(this, {
      refreshToken: observable,
      token: observable,
      tokenExpiresAt: observable,
      refreshExpiresAt: observable,
      otpToken: observable,
      role: observable,
      setToken: action,
      setRefreshToken: action,
      setOtpToken: action,
      setRole: action,
      setRefreshExpire: action,
      setTokenExpire: action,
      setCredentials: action,
      resetCredentials: action,
      loggedIn: computed,
    });
  }
  refreshToken: string = "";
  token: string = "";
  otpToken: string = "";
  tokenExpiresAt: number = 0;
  refreshExpiresAt: number = 0;
  role: entityTypes.tRole = "customer";
  setToken(newToken: string) {
    this.token = newToken;
  }
  setOtpToken(newOtpToken: string) {
    this.otpToken = newOtpToken;
  }
  setRefreshToken(newRefreshToken: string) {
    this.refreshToken = newRefreshToken;
  }
  setTokenExpire(time: number) {
    this.tokenExpiresAt = time;
  }
  setRefreshExpire(time: number) {
    this.refreshExpiresAt = time;
  }
  setRole(role: entityTypes.tRole) {
    this.role = role;
  }
  setCredentials(credentials: entityTypes.ICredentials) {
    const { token, refreshToken, tokenExpiresAt, refreshExpiresAt } =
      credentials;
    this.token = token;
    this.refreshToken = refreshToken;
    this.tokenExpiresAt = tokenExpiresAt;
    this.refreshExpiresAt = refreshExpiresAt;
  }
  resetCredentials() {
    this.token = "";
    this.refreshToken = "";
    this.tokenExpiresAt = 0;
    this.refreshExpiresAt = 0;
    this.role = "customer";
  }
  get loggedIn(): boolean {
    return !!this.refreshToken && !!this.token;
  }
}
