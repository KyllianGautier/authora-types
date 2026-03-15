/** Input for verifying a user's email address. */
export interface VerifyEmailInput {
  /** The user's email address. */
  email: string;
  /** The verification token sent to the user's email. */
  token: string;
}
