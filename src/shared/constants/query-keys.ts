export const QUERY_KEYS = {
  user:    { all: ['user'] as const,    me: ['user', 'me'] as const },
  session: { all: ['session'] as const },
} as const;