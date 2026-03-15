/** Output returned after verifying MFA setup. */
export interface VerifyMultiFactorAuthOutput {
  /** List of recovery codes (shown only once). */
  recoveryCodes: string[];
}
