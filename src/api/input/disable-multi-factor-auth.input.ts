/** Input for disabling multi-factor authentication. */
export interface DisableMultiFactorAuthInput {
  /** The user's email address. */
  email: string;
  /** The user's password. */
  password: string;
  /** The 6-digit TOTP verification code. */
  code: string;
}
