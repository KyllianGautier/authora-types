/** Input for requesting a magic link. */
export interface MagicLinkInput {
  /** The user's email address. */
  email: string;
  /** Whether to persist the session beyond the current browser session. */
  rememberMe?: boolean;
  /** URL to redirect the user to after magic link validation. */
  redirectTo?: string;
  /** Locale for the magic link UI page. */
  locale?: string;
}
