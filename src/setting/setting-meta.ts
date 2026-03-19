import { SettingKey } from '../enum/setting-key.enum';
import { SettingType } from '../enum/setting-type.enum';

export interface StringSettingMeta {
  type: SettingType.Url | SettingType.Pattern;
  default: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export interface NumberSettingMeta {
  type:
    | SettingType.DurationSec
    | SettingType.DurationMs
    | SettingType.Occurrence
    | SettingType.ByteSize
    | SettingType.Length;
  default: number;
  min?: number;
  max?: number;
  greaterThan?: SettingKey;
  lessThan?: SettingKey;
}

export interface BooleanSettingMeta {
  type: SettingType.Toggle;
  default: boolean;
}

export type SettingMeta = StringSettingMeta | NumberSettingMeta | BooleanSettingMeta;
