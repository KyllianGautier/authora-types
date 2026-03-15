/** Output returned after a successful sign-up. */
export interface SignUpOutput {
  /** The registration id. */
  id: string;
  /** The user's email address. */
  email: string;
  /** The registration creation date. */
  createdAt: Date;
}
