/** Input for verifying a sign-up email. */
export interface VerifyEmailInput {
  /** The user's email address. */
  email: string;
  /** The email verification token. */
  token: string;
}
