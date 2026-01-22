"use strict";
/**
 * Centralized enums and types used across all modules
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = exports.AppPlatform = void 0;
// App Platform
var AppPlatform;
(function (AppPlatform) {
    AppPlatform["IOS"] = "ios";
    AppPlatform["ANDROID"] = "android";
    AppPlatform["WEB"] = "web";
    AppPlatform["ALL"] = "all";
})(AppPlatform || (exports.AppPlatform = AppPlatform = {}));
// User Roles (from auth)
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Staff"] = "staff";
    UserRole["User"] = "user";
})(UserRole || (exports.UserRole = UserRole = {}));
