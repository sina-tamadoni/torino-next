"use client";

import AuthProvider from "@/context/AuthProvider";
import { defaultOptions } from "@/core/configs/reactQueryOptions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({ defaultOptions });

function TanstackQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
export default TanstackQueryProvider;
