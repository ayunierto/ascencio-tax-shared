import { CommonMessages } from './common-keys';

export const ZoomMessages = {
  TOPIC_REQUIRED: 'topicRequired',
  TYPE_INVALID: 'typeInvalid',
  START_TIME_INVALID: CommonMessages.START_TIME_INVALID,
  DURATION_INVALID: CommonMessages.DURATION_INVALID,
} as const;

export type ZoomMessageKey = (typeof ZoomMessages)[keyof typeof ZoomMessages];
