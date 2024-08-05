"use client";
import { ThemeProvider } from "next-themes";
import { MetaMaskProvider } from "metamask-react";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      themes={["is_light", "is_dark"]}
    >
      <SessionProvider>
        <MetaMaskProvider>{children}</MetaMaskProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
