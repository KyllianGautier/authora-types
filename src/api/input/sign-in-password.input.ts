export interface SignInPasswordInput {
  sessionId: string;
  email: string;
  password: string;
  rememberMe?: boolean;
}
