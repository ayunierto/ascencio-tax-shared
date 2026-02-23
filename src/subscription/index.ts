/**
 * Subscription configuration and types for the Ascencio Tax platform
 * This module provides centralized subscription management, feature flags, and trial limits
 */

/**
 * Available subscription tiers
 */
export enum SubscriptionTier {
  FREE = 'free',
  PREMIUM = 'premium',
  ENTERPRISE = 'enterprise',
}

/**
 * Premium features that can be restricted
 */
export enum PremiumFeature {
  COMPANIES = 'companies',
  CLIENTS = 'clients',
  EXPENSES = 'expenses',
  INVOICES = 'invoices',
  REPORTS = 'reports',
  // Appointments is FREE for all users
}

/**
 * Trial limits configuration - centralized for easy updates
 */
export const TRIAL_LIMITS = {
  // Time-based trial
  TRIAL_DAYS: 7, // 7 days free trial
  
  // Usage-based limits during trial
  MAX_COMPANIES: 2,
  MAX_CLIENTS: 5,
  MAX_EXPENSES: 10,
  MAX_INVOICES: 3,
  
  // After trial without subscription
  AFTER_TRIAL_COMPANIES: 1,
  AFTER_TRIAL_CLIENTS: 2,
  AFTER_TRIAL_EXPENSES: 5,
  AFTER_TRIAL_INVOICES: 1,
} as const;

/**
 * Feature access configuration per subscription tier
 */
export const FEATURE_ACCESS: Record<SubscriptionTier, Record<PremiumFeature, boolean>> = {
  [SubscriptionTier.FREE]: {
    [PremiumFeature.COMPANIES]: false,
    [PremiumFeature.CLIENTS]: false,
    [PremiumFeature.EXPENSES]: false,
    [PremiumFeature.INVOICES]: false,
    [PremiumFeature.REPORTS]: false,
  },
  [SubscriptionTier.PREMIUM]: {
    [PremiumFeature.COMPANIES]: true,
    [PremiumFeature.CLIENTS]: true,
    [PremiumFeature.EXPENSES]: true,
    [PremiumFeature.INVOICES]: true,
    [PremiumFeature.REPORTS]: true,
  },
  [SubscriptionTier.ENTERPRISE]: {
    [PremiumFeature.COMPANIES]: true,
    [PremiumFeature.CLIENTS]: true,
    [PremiumFeature.EXPENSES]: true,
    [PremiumFeature.INVOICES]: true,
    [PremiumFeature.REPORTS]: true,
  },
};

/**
 * RevenueCat entitlement identifiers
 * Update these to match your RevenueCat dashboard configuration
 */
export const ENTITLEMENTS = {
  PREMIUM: 'premium_features',
  ENTERPRISE: 'enterprise_features',
} as const;

/**
 * Subscription status types
 */
export interface SubscriptionStatus {
  tier: SubscriptionTier;
  isActive: boolean;
  isInTrial: boolean;
  trialEndDate: Date | null;
  expirationDate: Date | null;
  willRenew: boolean;
}

/**
 * Usage tracking for trial limits
 */
export interface UsageLimits {
  companies: number;
  clients: number;
  expenses: number;
  invoices: number;
}

/**
 * Helper function to check if a feature is accessible
 */
export function canAccessFeature(
  tier: SubscriptionTier,
  feature: PremiumFeature,
): boolean {
  return FEATURE_ACCESS[tier]?.[feature] ?? false;
}

/**
 * Helper function to check if user is within trial limits
 */
export function isWithinTrialLimits(
  usage: UsageLimits,
  isInTrial: boolean,
): Record<PremiumFeature, boolean> {
  if (!isInTrial) {
    return {
      [PremiumFeature.COMPANIES]: usage.companies < TRIAL_LIMITS.AFTER_TRIAL_COMPANIES,
      [PremiumFeature.CLIENTS]: usage.clients < TRIAL_LIMITS.AFTER_TRIAL_CLIENTS,
      [PremiumFeature.EXPENSES]: usage.expenses < TRIAL_LIMITS.AFTER_TRIAL_EXPENSES,
      [PremiumFeature.INVOICES]: usage.invoices < TRIAL_LIMITS.AFTER_TRIAL_INVOICES,
      [PremiumFeature.REPORTS]: false,
    };
  }

  return {
    [PremiumFeature.COMPANIES]: usage.companies < TRIAL_LIMITS.MAX_COMPANIES,
    [PremiumFeature.CLIENTS]: usage.clients < TRIAL_LIMITS.MAX_CLIENTS,
    [PremiumFeature.EXPENSES]: usage.expenses < TRIAL_LIMITS.MAX_EXPENSES,
    [PremiumFeature.INVOICES]: usage.invoices < TRIAL_LIMITS.MAX_INVOICES,
    [PremiumFeature.REPORTS]: false, // Reports always require subscription
  };
}

/**
 * Get remaining items for a feature during trial
 */
export function getRemainingItems(
  feature: PremiumFeature,
  currentUsage: number,
  isInTrial: boolean,
): number {
  if (isInTrial) {
    switch (feature) {
      case PremiumFeature.COMPANIES:
        return Math.max(0, TRIAL_LIMITS.MAX_COMPANIES - currentUsage);
      case PremiumFeature.CLIENTS:
        return Math.max(0, TRIAL_LIMITS.MAX_CLIENTS - currentUsage);
      case PremiumFeature.EXPENSES:
        return Math.max(0, TRIAL_LIMITS.MAX_EXPENSES - currentUsage);
      case PremiumFeature.INVOICES:
        return Math.max(0, TRIAL_LIMITS.MAX_INVOICES - currentUsage);
      default:
        return 0;
    }
  }

  // After trial
  switch (feature) {
    case PremiumFeature.COMPANIES:
      return Math.max(0, TRIAL_LIMITS.AFTER_TRIAL_COMPANIES - currentUsage);
    case PremiumFeature.CLIENTS:
      return Math.max(0, TRIAL_LIMITS.AFTER_TRIAL_CLIENTS - currentUsage);
    case PremiumFeature.EXPENSES:
      return Math.max(0, TRIAL_LIMITS.AFTER_TRIAL_EXPENSES - currentUsage);
    case PremiumFeature.INVOICES:
      return Math.max(0, TRIAL_LIMITS.AFTER_TRIAL_INVOICES - currentUsage);
    default:
      return 0;
  }
}

/**
 * Calculate trial end date from start date
 */
export function calculateTrialEndDate(startDate: Date): Date {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + TRIAL_LIMITS.TRIAL_DAYS);
  return endDate;
}

/**
 * Check if trial has expired
 */
export function isTrialExpired(trialEndDate: Date | null): boolean {
  if (!trialEndDate) return false;
  return new Date() > trialEndDate;
}
