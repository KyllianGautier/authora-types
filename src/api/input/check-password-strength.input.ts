/** Input for checking password strength. */
export interface CheckPasswordStrengthInput {
  /** The password to check. */
  password: string;
  /** Optional email for user-info rule check. */
  email?: string;
}
