/** Output returned after a successful sign-in. */
export interface SignInOutput {
  /** The JWT access token. */
  accessToken: string;
  /** The token type. */
  type: 'Bearer';
  /** Token expiration time in seconds. */
  expiresIn: number;
}
