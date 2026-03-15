/** Output returned after successful email verification. */
export interface VerifyEmailOutput {
  /** The verified user's email address. */
  email: string;
  /** The user creation date. */
  createdAt: Date;
}
