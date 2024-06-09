import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProviderClient } from "./ThemeProvider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estudando Next Prisma PWA",
  description: "Estudando Next Prisma PWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProviderClient>
      <html lang="ptBR">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/icons/icon.webp" />
        </head>
        <body className={roboto.className}>{children}</body>
      </html>
    </ThemeProviderClient>
  );
}
