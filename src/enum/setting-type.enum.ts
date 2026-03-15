export enum SettingType {
  // Number types
  DurationSec = 'DURATION_SEC',
  DurationMs = 'DURATION_MS',
  Occurrence = 'OCCURRENCE',
  ByteSize = 'BYTE_SIZE',
  Length = 'LENGTH',

  // String types
  Url = 'URL',
  Pattern = 'PATTERN',

  // Boolean type
  Toggle = 'TOGGLE'
}

export type SettingStorageKind = 'number' | 'string' | 'boolean';

const STORAGE_KIND_MAP: Record<SettingType, SettingStorageKind> = {
  [SettingType.DurationSec]: 'number',
  [SettingType.DurationMs]: 'number',
  [SettingType.Occurrence]: 'number',
  [SettingType.ByteSize]: 'number',
  [SettingType.Length]: 'number',
  [SettingType.Url]: 'string',
  [SettingType.Pattern]: 'string',
  [SettingType.Toggle]: 'boolean'
};

export function getStorageKind(type: SettingType): SettingStorageKind {
  return STORAGE_KIND_MAP[type];
}
