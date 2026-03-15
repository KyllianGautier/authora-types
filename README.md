# @kylliangautier/authora-types

Shared TypeScript interfaces for the Authora authentication platform. This package provides input and output DTOs used across Authora services.

## Installation

```bash
npm install @kylliangautier/authora-types
```

> This package is published to the GitHub Packages registry.

## Usage

```typescript
import { SignInInput, SignInOutput } from '@kylliangautier/authora-types';
```

## Available types

### Inputs

- `SignUpInput`
- `SignInInput`
- `VerifyEmailInput`
- `ResendVerificationEmailInput`
- `CheckEmailInput`
- `ChangePasswordInput`
- `DeleteAccountInput`
- `VerifyDeleteAccountInput`
- `SetupTwoFactorAuthInput`
- `VerifyTwoFactorAuthInput`
- `DisableTwoFactorAuthInput`
- `MagicLinkInput`
- `ValidateMagicLinkInput`

### Outputs

- `SignUpOutput`
- `SignInOutput`
- `VerifyEmailOutput`
- `CheckEmailOutput`
- `SetupTwoFactorAuthOutput`
- `VerifyTwoFactorAuthOutput`

## Development

```bash
npm install
npm run build
```
