/** Output representing a refresh token. */
export interface RefreshTokenOutput {
  /** Refresh token id. */
  id: string;
  /** Whether the token is revoked. */
  revoked: boolean;
  /** Token expiration date. */
  expiredAt: Date;
  /** Token creation date. */
  createdAt: Date;
}
