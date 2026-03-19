export interface MultiFactorAuthOutput {
  id: string;
  isVerified: boolean;
  recoveryCodeCount: number;
  createdAt: Date;
}
