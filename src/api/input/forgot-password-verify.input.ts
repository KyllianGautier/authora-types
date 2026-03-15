/** Input for resetting a password with a token. */
export interface ForgotPasswordVerifyInput {
  /** The user's email address. */
  email: string;
  /** The password reset token. */
  token: string;
  /** The new password. */
  newPassword: string;
}
