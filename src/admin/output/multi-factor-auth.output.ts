/** Output representing MFA status for a user. */
export interface MultiFactorAuthOutput {
  /** MFA id. */
  id: string;
  /** Whether MFA is verified and active. */
  isVerified: boolean;
  /** Number of recovery codes remaining. */
  recoveryCodeCount: number;
  /** MFA setup creation date. */
  createdAt: Date;
}
