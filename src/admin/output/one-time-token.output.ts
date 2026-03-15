import { OneTimeTokenType } from '../../enum/one-time-token-type.enum';

/** Output representing a one-time token. */
export interface OneTimeTokenOutput {
  /** One-time token id. */
  id: string;
  /** Token type. */
  type: OneTimeTokenType;
  /** Whether the token is revoked. */
  revoked: boolean;
  /** Token expiration date. */
  expiredAt: Date;
  /** Token creation date. */
  createdAt: Date;
}
