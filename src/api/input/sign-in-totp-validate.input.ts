export interface SignInTotpValidateInput {
  sessionId: string;
  code: string;
  trustThisDevice?: boolean;
}
