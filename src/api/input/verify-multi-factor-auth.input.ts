/** Input for verifying and enabling MFA. */
export interface VerifyMultiFactorAuthInput {
  /** The user's email address. */
  email: string;
  /** The user's password. */
  password: string;
  /** The 6-digit TOTP verification code. */
  code: string;
}
