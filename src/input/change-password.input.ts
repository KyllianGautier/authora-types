/** Input for changing a user's password. */
export interface ChangePasswordInput {
  /** The user's email address. */
  email: string;
  /** The user's current password. */
  currentPassword: string;
  /** The new password to set. */
  newPassword: string;
}
