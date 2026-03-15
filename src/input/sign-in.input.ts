/** Input for authenticating an existing user. */
export interface SignInInput {
  /** The user's email address. */
  email: string;
  /** The user's password. */
  password: string;
  /** Whether to persist the session beyond the current browser session. */
  rememberMe: boolean;
}
