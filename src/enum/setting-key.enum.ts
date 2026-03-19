export enum SettingKey {
  // Authentication
  AuthAccessTokenTtlSec = 'authentication.access_token_ttl_sec',
  AuthRefreshTokenShortTtlSec = 'authentication.refresh_token_short_ttl_sec',
  AuthRefreshTokenLongTtlSec = 'authentication.refresh_token_long_ttl_sec',
  AuthMagicLinkTokenTtlSec = 'authentication.magic_link_token_ttl_sec',
  AuthMagicLinkRefreshTokenTtlSec = 'authentication.magic_link_refresh_token_ttl_sec',

  // Password
  PasswordMinLength = 'password.min_length',
  PasswordRequireDigit = 'password.require_digit',
  PasswordRequireSpecialChar = 'password.require_special_char',
  PasswordRequireLowercase = 'password.require_lowercase',
  PasswordRequireUppercase = 'password.require_uppercase',
  PasswordForbidSequentialChars = 'password.forbid_sequential_chars',
  PasswordForbidRepeatedChars = 'password.forbid_repeated_chars',
  PasswordForbidKeyboardSequence = 'password.forbid_keyboard_sequence',
  PasswordForbidUserInfo = 'password.forbid_user_info',
  PasswordForbidCommonPassword = 'password.forbid_common_password',
  PasswordForgotTokenTtlSec = 'password.forgot_token_ttl_sec',

  // Account
  AccountEmailVerificationTokenTtlSec = 'account.email_verification_token_ttl_sec',
  AccountDeletionTokenTtlSec = 'account.deletion_token_ttl_sec',

  // Multi-Factor Authentication
  MfaVerifyTokenTtlSec = 'mfa.verify_token_ttl_sec',
  MfaValidateTokenTtlSec = 'mfa.validate_token_ttl_sec',
  MfaDisablingTokenTtlSec = 'mfa.disabling_token_ttl_sec',

  // Security
  SecurityHashMemoryCost = 'security.hash_memory_cost',
  SecurityHashTimeCost = 'security.hash_time_cost',
  SecurityHashParallelism = 'security.hash_parallelism',
  SecurityThrottleTtlSec = 'security.throttle_ttl_sec',
  SecurityThrottleOriginLimit = 'security.throttle_origin_limit',
  SecurityThrottleIdentityLimit = 'security.throttle_identity_limit',
  SecurityThrottleCombinedLimit = 'security.throttle_combined_limit',
  SecurityEndpointDelayMinMs = 'security.endpoint_delay_min_ms',
  SecurityEndpointDelayMaxMs = 'security.endpoint_delay_max_ms'
}
