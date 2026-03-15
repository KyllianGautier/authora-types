/** Input for confirming account deletion with a verification token. */
export interface VerifyDeleteAccountInput {
  /** The user's email address. */
  email: string;
  /** The deletion confirmation token. */
  token: string;
}
