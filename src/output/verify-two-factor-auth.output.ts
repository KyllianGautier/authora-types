/** Output returned after successfully activating two-factor authentication. */
export interface VerifyTwoFactorAuthOutput {
  /** One-time recovery codes for account access if the authenticator is unavailable. */
  recoveryCodes: string[];
}
