"use client";

import React, { ReactNode } from "react";
import { Toaster } from "./toast";
import { ThemeProvider } from "./theme";
import NextTopLoader from "nextjs-toploader";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <Toaster />
      <NextTopLoader
        color="#7c3aed"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        showSpinner={false}
        easing="ease"
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  );
};

export default GlobalProvider;
