export type tRole = "provider" | "customer";

export interface ICredentials {
  token: string;
  refreshToken: string;
  tokenExpiresAt: number;
  refreshExpiresAt: number;
}
