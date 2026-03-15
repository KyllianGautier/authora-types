/** Output returned after checking password strength. */
export interface CheckPasswordStrengthOutput {
  /** Whether the password meets all active rules. */
  valid: boolean;
  /** List of rule violations. */
  errors: string[];
}
