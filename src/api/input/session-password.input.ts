export interface SessionPasswordInput {
  sessionId: string;
  email: string;
  password: string;
  rememberMe?: boolean;
}
