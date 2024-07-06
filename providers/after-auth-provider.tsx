import React, { ReactNode } from "react";
import { Toaster } from "./toast";
import { ThemeProvider } from "./theme";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default GlobalProvider;
