import { queryClient } from "@/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { type FC, type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

interface Props {
  children: ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
          </div>
        }
      >
        {children}
      </Suspense>
    </QueryClientProvider>
  </ErrorBoundary>
);
