/** Output returned after initiating two-factor authentication setup. */
export interface SetupTwoFactorAuthOutput {
  /** The QR code image as a data URI for scanning with an authenticator app. */
  qrcode: string;
  /** The secret key for manual entry into an authenticator app. */
  manualCode: string;
}
