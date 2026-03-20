export interface SignInOutput {
  accessToken: string;
  type: 'Bearer';
  expiresIn: number;
  authSessionId: string;
}
