export interface OneTimeTokenOutput {
  id: string;
  type: string;
  revoked: boolean;
  expiredAt: Date;
  createdAt: Date;
}
