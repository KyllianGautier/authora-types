import { SettingKey } from '../../enum/setting-key.enum';
import { SettingType } from '../../enum/setting-type.enum';

/** Output representing a parsed setting. */
export interface SettingOutput {
  /** The setting key. */
  key: SettingKey;
  /** The setting type. */
  type: SettingType;
  /** The parsed setting value. */
  value: unknown;
  /** Setting creation date. */
  createdAt: Date;
  /** Setting last update date. */
  updatedAt: Date;
}
