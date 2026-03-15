/** Input for validating a magic link. */
export interface ValidateMagicLinkInput {
  /** The user's email address. */
  email: string;
  /** The magic link token. */
  token: string;
}
