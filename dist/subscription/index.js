"use strict";
/**
 * Subscription configuration and types for the Ascencio Tax platform
 * This module provides centralized subscription management, feature flags, and trial limits
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENTITLEMENTS = exports.FEATURE_ACCESS = exports.TRIAL_LIMITS = exports.PremiumFeature = exports.SubscriptionTier = void 0;
exports.canAccessFeature = canAccessFeature;
exports.isWithinTrialLimits = isWithinTrialLimits;
exports.getRemainingItems = getRemainingItems;
exports.calculateTrialEndDate = calculateTrialEndDate;
exports.isTrialExpired = isTrialExpired;
/**
 * Available subscription tiers
 */
var SubscriptionTier;
(function (SubscriptionTier) {
    SubscriptionTier["FREE"] = "free";
    SubscriptionTier["PREMIUM"] = "premium";
    SubscriptionTier["ENTERPRISE"] = "enterprise";
})(SubscriptionTier || (exports.SubscriptionTier = SubscriptionTier = {}));
/**
 * Premium features that can be restricted
 */
var PremiumFeature;
(function (PremiumFeature) {
    PremiumFeature["COMPANIES"] = "companies";
    PremiumFeature["CLIENTS"] = "clients";
    PremiumFeature["EXPENSES"] = "expenses";
    PremiumFeature["INVOICES"] = "invoices";
    PremiumFeature["REPORTS"] = "reports";
    // Appointments is FREE for all users
})(PremiumFeature || (exports.PremiumFeature = PremiumFeature = {}));
/**
 * Trial limits configuration - centralized for easy updates
 */
exports.TRIAL_LIMITS = {
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
};
/**
 * Feature access configuration per subscription tier
 */
exports.FEATURE_ACCESS = {
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
exports.ENTITLEMENTS = {
    PREMIUM: 'premium_features',
    ENTERPRISE: 'enterprise_features',
};
/**
 * Helper function to check if a feature is accessible
 */
function canAccessFeature(tier, feature) {
    return exports.FEATURE_ACCESS[tier]?.[feature] ?? false;
}
/**
 * Helper function to check if user is within trial limits
 */
function isWithinTrialLimits(usage, isInTrial) {
    if (!isInTrial) {
        return {
            [PremiumFeature.COMPANIES]: usage.companies < exports.TRIAL_LIMITS.AFTER_TRIAL_COMPANIES,
            [PremiumFeature.CLIENTS]: usage.clients < exports.TRIAL_LIMITS.AFTER_TRIAL_CLIENTS,
            [PremiumFeature.EXPENSES]: usage.expenses < exports.TRIAL_LIMITS.AFTER_TRIAL_EXPENSES,
            [PremiumFeature.INVOICES]: usage.invoices < exports.TRIAL_LIMITS.AFTER_TRIAL_INVOICES,
            [PremiumFeature.REPORTS]: false,
        };
    }
    return {
        [PremiumFeature.COMPANIES]: usage.companies < exports.TRIAL_LIMITS.MAX_COMPANIES,
        [PremiumFeature.CLIENTS]: usage.clients < exports.TRIAL_LIMITS.MAX_CLIENTS,
        [PremiumFeature.EXPENSES]: usage.expenses < exports.TRIAL_LIMITS.MAX_EXPENSES,
        [PremiumFeature.INVOICES]: usage.invoices < exports.TRIAL_LIMITS.MAX_INVOICES,
        [PremiumFeature.REPORTS]: false, // Reports always require subscription
    };
}
/**
 * Get remaining items for a feature during trial
 */
function getRemainingItems(feature, currentUsage, isInTrial) {
    if (isInTrial) {
        switch (feature) {
            case PremiumFeature.COMPANIES:
                return Math.max(0, exports.TRIAL_LIMITS.MAX_COMPANIES - currentUsage);
            case PremiumFeature.CLIENTS:
                return Math.max(0, exports.TRIAL_LIMITS.MAX_CLIENTS - currentUsage);
            case PremiumFeature.EXPENSES:
                return Math.max(0, exports.TRIAL_LIMITS.MAX_EXPENSES - currentUsage);
            case PremiumFeature.INVOICES:
                return Math.max(0, exports.TRIAL_LIMITS.MAX_INVOICES - currentUsage);
            default:
                return 0;
        }
    }
    // After trial
    switch (feature) {
        case PremiumFeature.COMPANIES:
            return Math.max(0, exports.TRIAL_LIMITS.AFTER_TRIAL_COMPANIES - currentUsage);
        case PremiumFeature.CLIENTS:
            return Math.max(0, exports.TRIAL_LIMITS.AFTER_TRIAL_CLIENTS - currentUsage);
        case PremiumFeature.EXPENSES:
            return Math.max(0, exports.TRIAL_LIMITS.AFTER_TRIAL_EXPENSES - currentUsage);
        case PremiumFeature.INVOICES:
            return Math.max(0, exports.TRIAL_LIMITS.AFTER_TRIAL_INVOICES - currentUsage);
        default:
            return 0;
    }
}
/**
 * Calculate trial end date from start date
 */
function calculateTrialEndDate(startDate) {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + exports.TRIAL_LIMITS.TRIAL_DAYS);
    return endDate;
}
/**
 * Check if trial has expired
 */
function isTrialExpired(trialEndDate) {
    if (!trialEndDate)
        return false;
    return new Date() > trialEndDate;
}
