export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL as string,
  APP_ENV:      import.meta.env.MODE,
} as const;