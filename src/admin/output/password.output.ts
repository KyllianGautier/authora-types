/** Output representing a user's password entry. */
export interface PasswordOutput {
  /** Password id. */
  id: string;
  /** Whether the password is revoked. */
  revoked: boolean;
  /** Password creation date. */
  createdAt: Date;
}
