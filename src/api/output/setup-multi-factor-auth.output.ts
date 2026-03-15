/** Output returned after initiating MFA setup. */
export interface SetupMultiFactorAuthOutput {
  /** QR code as a data URL for scanning with an MFA app. */
  qrcode: string;
  /** Manual code for manual entry in an MFA app. */
  manualCode: string;
}
