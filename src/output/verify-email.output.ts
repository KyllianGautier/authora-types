/** Output returned after a successful email verification. */
export interface VerifyEmailOutput {
  /** The verified email address. */
  email: string;
  /** The date and time the account was created. */
  createdAt: Date;
}
