export interface AuthSessionStatusOutput {
  sessionId: string;
  nextStep: 'primaryAuth' | 'mfaSetup' | 'mfaAuth' | 'complete';
}
