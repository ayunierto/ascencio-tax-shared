import { CommonMessages } from './common-keys';

export const ZoomMessages = {} as const;

export type ZoomMessageKey = (typeof ZoomMessages)[keyof typeof ZoomMessages];
