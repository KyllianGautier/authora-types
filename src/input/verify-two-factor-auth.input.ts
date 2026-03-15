/** Input for verifying and activating two-factor authentication. */
export interface VerifyTwoFactorAuthInput {
  /** The user's email address. */
  email: string;
  /** The user's password for confirmation. */
  password: string;
  /** The TOTP code from the authenticator app. */
  code: string;
}
