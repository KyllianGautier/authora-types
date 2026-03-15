/** Input for requesting account deletion. */
export interface DeleteAccountInput {
  /** The user's email address. */
  email: string;
  /** The user's password for confirmation. */
  password: string;
}
