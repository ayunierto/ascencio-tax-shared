"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostSchema = exports.createPostSchema = void 0;
const zod_1 = require("zod");
const i18n_1 = require("../i18n");
// Blog Posts
exports.createPostSchema = zod_1.z.object({
    title: zod_1.z
        .string({ error: i18n_1.ValidationMessages.STRING })
        .nonempty({ error: i18n_1.ValidationMessages.REQUIRED }),
    url: zod_1.z.url({ error: i18n_1.ValidationMessages.URL }),
});
exports.updatePostSchema = exports.createPostSchema.partial();
