"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseZodIssueMessage = exports.buildZodMessage = void 0;
/* Builds a Zod-compatible message string that encodes a message key and optional parameters. */
const buildZodMessage = (messageKey, params) => ({
    message: JSON.stringify({
        messageKey,
        ...(params ? { params } : {}),
    }),
});
exports.buildZodMessage = buildZodMessage;
const parseZodIssueMessage = (message) => {
    if (!message)
        return { messageKey: '' };
    try {
        const parsed = JSON.parse(message);
        if (parsed?.messageKey) {
            return { messageKey: parsed.messageKey, params: parsed.params };
        }
    }
    catch {
        // fall through to return the raw message key
    }
    return { messageKey: message };
};
exports.parseZodIssueMessage = parseZodIssueMessage;
