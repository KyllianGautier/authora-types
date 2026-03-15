/** Input for initiating two-factor authentication setup. */
export interface SetupTwoFactorAuthInput {
  /** The user's email address. */
  email: string;
  /** The user's password for confirmation. */
  password: string;
}
