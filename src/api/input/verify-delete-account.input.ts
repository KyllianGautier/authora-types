/** Input for confirming account deletion. */
export interface VerifyDeleteAccountInput {
  /** The user's email address. */
  email: string;
  /** The account deletion token. */
  token: string;
}
