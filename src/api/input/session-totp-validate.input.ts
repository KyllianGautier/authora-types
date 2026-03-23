export interface SessionTotpValidateInput {
  sessionId: string;
  code: string;
  trustThisDevice?: boolean;
}
