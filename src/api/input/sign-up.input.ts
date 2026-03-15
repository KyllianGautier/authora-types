/** Input for registering a new user. */
export interface SignUpInput {
  /** The user's email address. */
  email: string;
  /** The user's password. */
  password: string;
  /** Locale for the verification email UI page. */
  locale?: string;
}
