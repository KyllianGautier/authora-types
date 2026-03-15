/** Input for requesting account deletion. */
export interface DeleteAccountInput {
  /** The user's email address. */
  email: string;
  /** The user's password. */
  password: string;
  /** Locale for the account deletion email UI page. */
  locale?: string;
}
