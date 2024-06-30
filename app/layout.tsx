import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Light.woff",
      weight: "300",
    },
    {
      path: "../fonts/Satoshi-Regular.woff",
      weight: "400",
    },
    {
      path: "../fonts/Satoshi-Medium.woff",
      weight: "500",
    },
    {
      path: "../fonts/Satoshi-Bold.woff",
      weight: "700",
    },
    {
      path: "../fonts/Satoshi-Black.woff",
      weight: "900",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eventmo",
    template: " %s | Eventmo",
  },

  description: "all your events in one place ",
  icons: {
    icon: [
      { url: "/notpadd-light.png", media: "(prefers-color-scheme: dark)" },
      { url: "/notpadd-dark.png", media: "(prefers-color-scheme: light)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
