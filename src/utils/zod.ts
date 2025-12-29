export type ZodIssueMessage = {
  messageKey: string;
  params?: Record<string, any>;
};

export const buildZodMessage = (
  messageKey: string,
  params?: Record<string, any>,
) => ({
  message: JSON.stringify({
    messageKey,
    ...(params ? { params } : {}),
  }),
});

export const parseZodIssueMessage = (message?: string): ZodIssueMessage => {
  if (!message) return { messageKey: '' };

  try {
    const parsed = JSON.parse(message);
    if (parsed?.messageKey) {
      return { messageKey: parsed.messageKey, params: parsed.params };
    }
  } catch {
    // fall through to return the raw message key
  }

  return { messageKey: message };
};
