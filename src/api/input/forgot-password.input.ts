/** Input for requesting a password reset. */
export interface ForgotPasswordInput {
  /** The user's email address. */
  email: string;
  /** Locale for the password reset email UI page. */
  locale?: string;
}
