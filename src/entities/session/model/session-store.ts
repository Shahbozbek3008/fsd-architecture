import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Session } from "../types";

interface SessionState {
  session: Session | null;
  isAuthenticated: boolean;
  setSession: (session: Session) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      session: null,
      isAuthenticated: false,
      setSession: (session) => set({ session, isAuthenticated: true }),
      clearSession: () => set({ session: null, isAuthenticated: false }),
    }),
    { name: "session-storage" },
  ),
);

export const sessionModel = {
  useSessionActions: () => {
    const setSession = useSessionStore((s) => s.setSession);
    const clearSession = useSessionStore((s) => s.clearSession);
    return { setSession, clearSession };
  },
};
