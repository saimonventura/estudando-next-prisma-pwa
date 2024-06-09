import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ptBR">
      <body>{children}</body>
    </html>
  );
}