export declare const AuthMessages: {
    readonly INVALID_CREDENTIALS: "invalidCredentials";
    readonly LOGIN_SUCCESS: "loginSuccess";
    readonly SIGN_UP_SUCCESS: "signUpSuccess";
    readonly ACCOUNT_LOCKED: "accountLocked";
    readonly EMAIL_NOT_VERIFIED: "emailNotVerified";
    readonly CODE_NOT_FOUND: "codeNotFound";
    readonly EMAIL_ALREADY_EXISTS: "emailAlreadyExists";
    readonly EMAIL_ALREADY_VERIFIED: "emailAlreadyVerified";
    readonly CODE_EXPIRED: "codeExpired";
    readonly FAILED_TO_VERIFY_EMAIL: "failedToVerifyEmail";
    readonly VERIFICATION_EMAIL_RESENT: "verificationEmailResent";
    readonly RESET_CODE_SENT: "resetCodeSent";
    readonly RESET_PASSWORD_EMAIL_SENT: "resetPasswordEmailSent";
    readonly GOOGLE_PROFILE_MISSING_EMAIL: "googleProfileMissingEmail";
    readonly INVALID_CURRENT_PASSWORD: "invalidCurrentPassword";
    readonly ACCOUNT_DELETED: "accountDeleted";
};
export type AuthMessageKey = (typeof AuthMessages)[keyof typeof AuthMessages];
//# sourceMappingURL=auth-keys.d.ts.map