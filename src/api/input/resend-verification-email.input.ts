/** Input for resending a verification email. */
export interface ResendVerificationEmailInput {
  /** The user's email address. */
  email: string;
  /** Locale for the verification email UI page. */
  locale?: string;
}
