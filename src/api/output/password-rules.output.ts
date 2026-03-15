/** Output describing the active password strength rules. */
export interface PasswordRulesOutput {
  minLength: number;
  requireDigit: boolean;
  requireSpecialChar: boolean;
  requireLowercase: boolean;
  requireUppercase: boolean;
  forbidSequentialChars: boolean;
  forbidRepeatedChars: boolean;
  forbidKeyboardSequence: boolean;
  forbidUserInfo: boolean;
  forbidCommonPassword: boolean;
}
