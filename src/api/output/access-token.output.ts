/** Output returned after a successful token exchange or refresh. */
export interface AccessTokenOutput {
  /** The JWT access token. */
  accessToken: string;
  /** The token type. */
  type: 'Bearer';
  /** Token expiration time in seconds. */
  expiresIn: number;
  /** URL to redirect the user to after sign-in. */
  redirectUrl?: string;
}
