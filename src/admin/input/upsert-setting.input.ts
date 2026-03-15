import { SettingKey } from '../../enum/setting-key.enum';

/** Input for creating or updating a setting. */
export interface UpsertSettingInput {
  /** The setting key. */
  key: SettingKey;
  /** The setting value (string, number or boolean depending on the key). */
  value: string | number | boolean;
}
