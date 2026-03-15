import { SettingKey } from '../enum/setting-key.enum';
import { SettingType } from '../enum/setting-type.enum';
import { SettingMeta } from './setting-meta';

export const SETTING_DEFINITIONS: Record<SettingKey, SettingMeta> = {
  // Authentication
  [SettingKey.AuthAccessTokenTtlSec]: {
    type: SettingType.DurationSec,
    default: 900,
    min: 1
  },
  [SettingKey.AuthRefreshTokenShortTtlSec]: {
    type: SettingType.DurationSec,
    default: 86400,
    min: 1,
    lessThan: SettingKey.AuthRefreshTokenLongTtlSec
  },
  [SettingKey.AuthRefreshTokenLongTtlSec]: {
    type: SettingType.DurationSec,
    default: 2592000,
    min: 1,
    greaterThan: SettingKey.AuthRefreshTokenShortTtlSec
  },
  [SettingKey.AuthMagicLinkTokenTtlSec]: {
    type: SettingType.DurationSec,
    default: 300,
    min: 1
  },
  [SettingKey.AuthMagicLinkRefreshTokenTtlSec]: {
    type: SettingType.DurationSec,
    default: 86400,
    min: 1
  },

  // Password
  [SettingKey.PasswordMinLength]: {
    type: SettingType.Length,
    default: 8,
    min: 8
  },
  [SettingKey.PasswordRequireDigit]: {
    type: SettingType.Toggle,
    default: true
  },
  [SettingKey.PasswordRequireSpecialChar]: {
    type: SettingType.Toggle,
    default: true
  },
  [SettingKey.PasswordRequireLowercase]: {
    type: SettingType.Toggle,
    default: true
  },
  [SettingKey.PasswordRequireUppercase]: {
    type: SettingType.Toggle,
    default: true
  },
  [SettingKey.PasswordForbidSequentialChars]: {
    type: SettingType.Toggle,
    default: false
  },
  [SettingKey.PasswordForbidRepeatedChars]: {
    type: SettingType.Toggle,
    default: false
  },
  [SettingKey.PasswordForbidKeyboardSequence]: {
    type: SettingType.Toggle,
    default: false
  },
  [SettingKey.PasswordForbidUserInfo]: {
    type: SettingType.Toggle,
    default: true
  },
  [SettingKey.PasswordForbidCommonPassword]: {
    type: SettingType.Toggle,
    default: false
  },
  [SettingKey.PasswordForgotTokenTtlSec]: {
    type: SettingType.DurationSec,
    default: 3600,
    min: 1
  },

  // Account
  [SettingKey.AccountEmailVerificationTokenTtlSec]: {
    type: SettingType.DurationSec,
    default: 86400,
    min: 1
  },
  [SettingKey.AccountDeletionTokenTtlSec]: {
    type: SettingType.DurationSec,
    default: 3600,
    min: 1
  },

  // Multi-Factor Authentication
  [SettingKey.MfaVerifyTokenTtlSec]: {
    type: SettingType.DurationSec,
    default: 86400,
    min: 1
  },
  [SettingKey.MfaValidateTokenTtlSec]: {
    type: SettingType.DurationSec,
    default: 86400,
    min: 1
  },
  [SettingKey.MfaDisablingTokenTtlSec]: {
    type: SettingType.DurationSec,
    default: 86400,
    min: 1
  },

  // Security
  [SettingKey.SecurityHashMemoryCost]: {
    type: SettingType.ByteSize,
    default: 65536,
    min: 1
  },
  [SettingKey.SecurityHashTimeCost]: {
    type: SettingType.Occurrence,
    default: 3,
    min: 1
  },
  [SettingKey.SecurityHashParallelism]: {
    type: SettingType.Occurrence,
    default: 4,
    min: 1
  },
  [SettingKey.SecurityThrottleTtlSec]: {
    type: SettingType.DurationSec,
    default: 60,
    min: 1
  },
  [SettingKey.SecurityThrottleOriginLimit]: {
    type: SettingType.Occurrence,
    default: 30,
    min: 1
  },
  [SettingKey.SecurityThrottleIdentityLimit]: {
    type: SettingType.Occurrence,
    default: 10,
    min: 1
  },
  [SettingKey.SecurityThrottleCombinedLimit]: {
    type: SettingType.Occurrence,
    default: 5,
    min: 1
  },
  [SettingKey.SecurityEndpointDelayMinMs]: {
    type: SettingType.DurationMs,
    default: 200,
    min: 0,
    lessThan: SettingKey.SecurityEndpointDelayMaxMs
  },
  [SettingKey.SecurityEndpointDelayMaxMs]: {
    type: SettingType.DurationMs,
    default: 400,
    min: 0,
    greaterThan: SettingKey.SecurityEndpointDelayMinMs
  }
};
