/**
 * Subscription configuration and types for the Ascencio Tax platform
 * This module provides centralized subscription management, feature flags, and trial limits
 */
/**
 * Available subscription tiers
 */
export declare enum SubscriptionTier {
    FREE = "free",
    PREMIUM = "premium",
    ENTERPRISE = "enterprise"
}
/**
 * Premium features that can be restricted
 */
export declare enum PremiumFeature {
    COMPANIES = "companies",
    CLIENTS = "clients",
    EXPENSES = "expenses",
    INVOICES = "invoices",
    REPORTS = "reports"
}
/**
 * Trial limits configuration - centralized for easy updates
 */
export declare const TRIAL_LIMITS: {
    readonly TRIAL_DAYS: 7;
    readonly MAX_COMPANIES: 2;
    readonly MAX_CLIENTS: 5;
    readonly MAX_EXPENSES: 10;
    readonly MAX_INVOICES: 3;
    readonly AFTER_TRIAL_COMPANIES: 1;
    readonly AFTER_TRIAL_CLIENTS: 2;
    readonly AFTER_TRIAL_EXPENSES: 5;
    readonly AFTER_TRIAL_INVOICES: 1;
};
/**
 * Feature access configuration per subscription tier
 */
export declare const FEATURE_ACCESS: Record<SubscriptionTier, Record<PremiumFeature, boolean>>;
/**
 * RevenueCat entitlement identifiers
 * Update these to match your RevenueCat dashboard configuration
 */
export declare const ENTITLEMENTS: {
    readonly PREMIUM: "premium_features";
    readonly ENTERPRISE: "enterprise_features";
};
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
export declare function canAccessFeature(tier: SubscriptionTier, feature: PremiumFeature): boolean;
/**
 * Helper function to check if user is within trial limits
 */
export declare function isWithinTrialLimits(usage: UsageLimits, isInTrial: boolean): Record<PremiumFeature, boolean>;
/**
 * Get remaining items for a feature during trial
 */
export declare function getRemainingItems(feature: PremiumFeature, currentUsage: number, isInTrial: boolean): number;
/**
 * Calculate trial end date from start date
 */
export declare function calculateTrialEndDate(startDate: Date): Date;
/**
 * Check if trial has expired
 */
export declare function isTrialExpired(trialEndDate: Date | null): boolean;
//# sourceMappingURL=index.d.ts.map