import { useSessionStore } from "./session-store";

export const useSessionModel = () => ({
  isAuthenticated: useSessionStore((s) => s.isAuthenticated),
  session: useSessionStore((s) => s.session),
});
