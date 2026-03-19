export interface RefreshTokenOutput {
  id: string;
  revoked: boolean;
  expiredAt: Date;
  createdAt: Date;
}
