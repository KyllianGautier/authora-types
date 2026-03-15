/** Output representing a registration. */
export interface RegistrationOutput {
  /** Registration id. */
  id: string;
  /** Email address. */
  email: string;
  /** Email verification token expiration date. */
  emailVerificationTokenExpiresAt: Date;
  /** Registration creation date. */
  createdAt: Date;
}
