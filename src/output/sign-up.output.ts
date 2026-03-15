/** Output returned after a successful sign-up. */
export interface SignUpOutput {
  /** The newly created user's unique identifier. */
  id: string;
  /** The user's email address. */
  email: string;
  /** The date and time the account was created. */
  createdAt: Date;
}
